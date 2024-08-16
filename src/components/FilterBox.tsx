import { useState } from 'react';
import { FilterType } from '../constants';

const FilterBox = ({
  type,
  title,
  maxOptionsShown = 6,
  isCollapsed = false,
  query,
  handleSetQuery
}: FilterBoxProps) => {
  const [collapsed, setCollapsed] = useState(isCollapsed);

  const RenderFilterOptions = () => {
    switch (type) {
      case FilterType.PRICE:
        return (
          <>
            <div className="flex justify-between items-center pb-2 border-b mb-2">
              <label htmlFor="minPrice">£</label>
              <input
                id="minPrice"
                type="number"
                placeholder="Min"
                className="mx-2 text-center min-h-[3rem] max-h-[3.5rem]"
              />
              <label htmlFor="maxPrice">to</label>
              <input
                id="maxPrice"
                type="number"
                placeholder="Max"
                className="mx-2 text-center min-h-[3rem] max-h-[3.5rem]"
              />
              <button
                className="btn btn--primary"
                onClick={() => {
                  const minPrice = document.getElementById('minPrice')!.value;
                  const maxPrice = document.getElementById('maxPrice')!.value;
                  handleSetQuery({
                    ...query,
                    facets: {
                      ...query.facets,
                      prices: [
                        {
                          indentifier: '3D-02-FC-D0-B1-8F-65-51',
                          value: { gte: minPrice, lte: maxPrice }
                        }
                      ]
                    },
                    pageNumber: 1
                  });
                }}
              >
                Go
              </button>
            </div>
            <label className="label label--checkbox">
              <input
                type="checkbox"
                onChange={e => {
                  const newQuery = { ...query, pageNumber: 1 };
                  newQuery.facets = {
                    ...newQuery.facets,
                    prices: e.target.checked
                      ? [
                          ...(newQuery.facets?.prices ? newQuery.facets?.prices : []),
                          { identifier: 'DA-36-CF-F0-F6-10-4F-C8', value: { gte: 0, lte: 100 } }
                        ]
                      : newQuery.facets?.prices.filter(price => price.identifier !== 'DA-36-CF-F0-F6-10-4F-C8')
                  };

                  if (!newQuery.facets.prices.length) delete newQuery.facets.prices;

                  handleSetQuery(newQuery);
                }}
                defaultChecked={query.facets?.prices?.find(
                  price => price.identifier === 'DA-36-CF-F0-F6-10-4F-C8'
                )}
              />
              £0 - £100 <span className="filter-count">(2)</span>
            </label>
            <label className="label label--checkbox">
              <input
                type="checkbox"
                onChange={e => {
                  const newQuery = { ...query, pageNumber: 1 };
                  newQuery.facets = {
                    ...newQuery.facets,
                    prices: e.target.checked
                      ? [
                          ...(newQuery.facets?.prices ? newQuery.facets?.prices : []),
                          { identifier: '44-54-E8-0E-00-CF-BF-00', value: { gte: 100, lte: 150 } }
                        ]
                      : newQuery.facets?.prices.filter(price => price.identifier !== '44-54-E8-0E-00-CF-BF-00')
                  };

                  if (!newQuery.facets.prices.length) delete newQuery.facets.prices;

                  handleSetQuery(newQuery);
                }}
                defaultChecked={query.facets?.prices?.find(
                  price => price.identifier === '44-54-E8-0E-00-CF-BF-00'
                )}
              />
              £100 - £150 <span className="filter-count">(27)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              £150 - £200 <span className="filter-count">(93)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              £200 - £300 <span className="filter-count">(223)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              £300 - £400 <span className="filter-count">(155)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              £400 - £600 <span className="filter-count">(201)</span>
            </label>
            {maxOptionsShown > 6 && (
              <button type="button" className="filter-show-more-btn">
                Show More
              </button>
            )}
          </>
        );
      case FilterType.STYLE:
        return (
          <>
            <label className="label label--checkbox">
              <input
                type="checkbox"
                onChange={e => {
                  const newQuery = { ...query, pageNumber: 1 };
                  newQuery.facets = {
                    ...newQuery.facets,
                    toiletStyle: e.target.checked
                      ? [
                          ...(newQuery.facets?.toiletStyle ? newQuery.facets?.toiletStyle : []),
                          { identifier: '1A-0D-8E-F5-02-80-29-13', value: 'Modern' }
                        ]
                      : newQuery.facets?.toiletStyle.filter(
                          style => style.identifier !== '1A-0D-8E-F5-02-80-29-13'
                        )
                  };

                  if (!newQuery.facets.toiletStyle.length) delete newQuery.facets.toiletStyle;

                  handleSetQuery(newQuery);
                }}
                defaultChecked={query.facets?.toiletStyle?.find(
                  style => style.identifier === '1A-0D-8E-F5-02-80-29-13'
                )}
              />
              Modern <span className="filter-count">(609)</span>
            </label>
            <label className="label label--checkbox">
              <input
                type="checkbox"
                onChange={e => {
                  const newQuery = { ...query, pageNumber: 1 };
                  newQuery.facets = {
                    ...newQuery.facets,
                    toiletStyle: e.target.checked
                      ? [
                          ...(newQuery.facets?.toiletStyle ? newQuery.facets?.toiletStyle : []),
                          { identifier: 'E1-19-4C-5A-0A-24-02-36', value: 'Traditional' }
                        ]
                      : newQuery.facets?.toiletStyle.filter(
                          style => style.identifier !== 'E1-19-4C-5A-0A-24-02-36'
                        )
                  };

                  if (!newQuery.facets.toiletStyle.length) delete newQuery.facets.toiletStyle;

                  handleSetQuery(newQuery);
                }}
                defaultChecked={query.facets?.toiletStyle?.find(
                  style => style.identifier === 'E1-19-4C-5A-0A-24-02-36'
                )}
              />
              Traditional <span className="filter-count">(104)</span>
            </label>
            {maxOptionsShown > 6 && (
              <button type="button" className="filter-show-more-btn">
                Show More
              </button>
            )}
          </>
        );
      case FilterType.COLOUR:
        return (
          <>
            <label className="label label--checkbox">
              <input
                type="checkbox"
                onChange={e => {
                  const newQuery = { ...query, pageNumber: 1 };
                  newQuery.facets = {
                    ...newQuery.facets,
                    colour: e.target.checked
                      ? [
                          ...(newQuery.facets?.colour ? newQuery.facets?.colour : []),
                          { identifier: '9C-C9-66-4D-3D-69-5C-66', value: 'Black' }
                        ]
                      : newQuery.facets?.colour.filter(colour => colour.identifier !== '9C-C9-66-4D-3D-69-5C-66')
                  };

                  if (!newQuery.facets.colour.length) delete newQuery.facets.colour;

                  handleSetQuery(newQuery);
                }}
                defaultChecked={query.facets?.colour?.find(
                  colour => colour.identifier === '9C-C9-66-4D-3D-69-5C-66'
                )}
              />
              Black <span className="filter-count">(45)</span>
            </label>
            <label className="label label--checkbox">
              <input
                type="checkbox"
                onChange={e => {
                  const newQuery = { ...query, pageNumber: 1 };
                  newQuery.facets = {
                    ...newQuery.facets,
                    colour: e.target.checked
                      ? [
                          ...(newQuery.facets?.colour ? newQuery.facets?.colour : []),
                          { identifier: '3C-AA-E4-CE-DD-21-23-3D', value: 'Blue' }
                        ]
                      : newQuery.facets?.colour.filter(colour => colour.identifier !== '3C-AA-E4-CE-DD-21-23-3D')
                  };

                  if (!newQuery.facets.colour.length) delete newQuery.facets.colour;

                  handleSetQuery(newQuery);
                }}
                defaultChecked={query.facets?.colour?.find(
                  colour => colour.identifier === '3C-AA-E4-CE-DD-21-23-3D'
                )}
              />
              Blue <span className="filter-count">(2)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Brass <span className="filter-count">(17)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Chrome <span className="filter-count">(1)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Green <span className="filter-count">(2)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Grey <span className="filter-count">(3)</span>
            </label>
            {maxOptionsShown > 6 && (
              <button type="button" className="filter-show-more-btn">
                Show More
              </button>
            )}
          </>
        );
      case FilterType.FLUSHTYPE:
        return (
          <>
            <label className="label label--checkbox">
              <input
                type="checkbox"
                onChange={e => {
                  const newQuery = { ...query, pageNumber: 1 };
                  newQuery.facets = {
                    ...newQuery.facets,
                    flushType: e.target.checked
                      ? [
                          ...(newQuery.facets?.flushType ? newQuery.facets?.flushType : []),
                          { identifier: '7C-58-51-DC-0E-59-97-D9', value: 'Chain Pull' }
                        ]
                      : newQuery.facets?.flushType.filter(type => type.identifier !== '7C-58-51-DC-0E-59-97-D9')
                  };

                  if (!newQuery.facets.flushType.length) delete newQuery.facets.flushType;

                  handleSetQuery(newQuery);
                }}
                defaultChecked={query.facets?.flushType?.find(
                  type => type.identifier === '7C-58-51-DC-0E-59-97-D9'
                )}
              />
              Chain Pull <span className="filter-count">(32)</span>
            </label>
            <label className="label label--checkbox">
              <input
                type="checkbox"
                onChange={e => {
                  const newQuery = { ...query, pageNumber: 1 };
                  newQuery.facets = {
                    ...newQuery.facets,
                    flushType: e.target.checked
                      ? [
                          ...(newQuery.facets?.flushType ? newQuery.facets?.flushType : []),
                          { identifier: '29-0F-54-3B-25-AF-9D-BB', value: 'Dual Flush' }
                        ]
                      : newQuery.facets?.flushType.filter(type => type.identifier !== '29-0F-54-3B-25-AF-9D-BB')
                  };

                  if (!newQuery.facets.flushType.length) delete newQuery.facets.flushType;

                  handleSetQuery(newQuery);
                }}
                defaultChecked={query.facets?.flushType?.find(
                  type => type.identifier === '29-0F-54-3B-25-AF-9D-BB'
                )}
              />
              Dual Flush <span className="filter-count">(371)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Lever <span className="filter-count">(82)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Push Button <span className="filter-count">(353)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Rimless <span className="filter-count">(268)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Smart Bidet <span className="filter-count">(20)</span>
            </label>
            {maxOptionsShown > 6 && (
              <button type="button" className="filter-show-more-btn">
                Show More
              </button>
            )}
          </>
        );
      case FilterType.PANTYPE:
        return (
          <>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Back To Wall <span className="filter-count">(247)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Comfort Height <span className="filter-count">(63)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Open Back <span className="filter-count">(609)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Short Projection <span className="filter-count">(130)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Wall Hung <span className="filter-count">(239)</span>
            </label>
            {maxOptionsShown > 6 && (
              <button type="button" className="filter-show-more-btn">
                Show More
              </button>
            )}
          </>
        );
      case FilterType.PROJECTION:
        return (
          <>
            <label className="label label--checkbox">
              <input type="checkbox" />0 - 499 mm <span className="filter-count">(66)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              500 - 549 mm <span className="filter-count">(253)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              550 - 599 mm <span className="filter-count">(88)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              600 - 649 mm <span className="filter-count">(139)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              650 - 699 mm <span className="filter-count">(121)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              700 - 849 mm <span className="filter-count">(78)</span>
            </label>
            {maxOptionsShown > 6 && (
              <button type="button" className="filter-show-more-btn">
                Show More
              </button>
            )}
          </>
        );
      case FilterType.WIDTH:
        return (
          <>
            <label className="label label--checkbox">
              <input type="checkbox" />0 - 499 mm <span className="filter-count">(66)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              500 - 549 mm <span className="filter-count">(253)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              550 - 599 mm <span className="filter-count">(88)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              600 - 649 mm <span className="filter-count">(139)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              650 - 699 mm <span className="filter-count">(121)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              700 - 849 mm <span className="filter-count">(78)</span>
            </label>
            {maxOptionsShown > 6 && (
              <button type="button" className="filter-show-more-btn">
                Show More
              </button>
            )}
          </>
        );
      case FilterType.HEIGHT:
        return (
          <>
            <label className="label label--checkbox">
              <input type="checkbox" />0 - 499 mm <span className="filter-count">(66)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              500 - 549 mm <span className="filter-count">(253)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              550 - 599 mm <span className="filter-count">(88)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              600 - 649 mm <span className="filter-count">(139)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              650 - 699 mm <span className="filter-count">(139)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              700 - 849 mm <span className="filter-count">(139)</span>
            </label>
            {maxOptionsShown > 6 && (
              <button type="button" className="filter-show-more-btn">
                Show More
              </button>
            )}
          </>
        );
      case FilterType.SOFTCLOSE:
        return (
          <>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Soft Close <span className="filter-count">(139)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Standard <span className="filter-count">(139)</span>
            </label>
            {maxOptionsShown > 6 && (
              <button type="button" className="filter-show-more-btn">
                Show More
              </button>
            )}
          </>
        );
      case FilterType.SHAPE:
        return (
          <>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Curved <span className="filter-count">(139)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Square <span className="filter-count">(139)</span>
            </label>
            {maxOptionsShown > 6 && (
              <button type="button" className="filter-show-more-btn">
                Show More
              </button>
            )}
          </>
        );
      case FilterType.NEW:
        return (
          <>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Yes <span className="filter-count">(5)</span>
            </label>
          </>
        );
      case FilterType.BRAND:
        return (
          <>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Alaska <span className="filter-count">(139)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Arcade Bathrooms <span className="filter-count">(139)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Arezzo <span className="filter-count">(139)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Armitage Shanks <span className="filter-count">(139)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              BagnoDesign <span className="filter-count">(139)</span>
            </label>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Bayswater <span className="filter-count">(139)</span>
            </label>
            {maxOptionsShown > 6 && (
              <button type="button" className="filter-show-more-btn">
                Show More
              </button>
            )}
          </>
        );
      case FilterType.SALE:
        return (
          <>
            <label className="label label--checkbox">
              <input type="checkbox" />
              Yes <span className="filter-count">(139)</span>
            </label>
          </>
        );
      case FilterType.AVAILABILITY:
        return (
          <>
            <label className="label label--checkbox">
              <input type="checkbox" />
              In Stock <span className="filter-count">(139)</span>
            </label>
          </>
        );
      case FilterType.TOILETS:
        return (
          <ul>
            <li>
              <a href="/">Back To Wall Toilets</a>
            </li>
            <li>
              <a href="/">Bidets</a>
            </li>
            <li>
              <a href="/">Black Toilets</a>
            </li>
            <li>
              <a href="/">Cloakroom Toilets</a>
            </li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <section className="filter-box overflow-hidden">
      <div className="flex justify-between items-center px-[12px] py-[18px] border-b">
        <h3>{title}</h3>
        <button className="filter-collapse-btn" onClick={() => setCollapsed(!collapsed)}>
          <span
            className={`block w-[12px] bg-no-repeat bg-contain ${
              collapsed ? 'bg-plus h-[12px]' : 'bg-minus h-[5px]'
            }`}
          />
        </button>
      </div>
      <div className={`transition-[max-height] duration-[0.6s] ease ${collapsed ? 'max-h-0' : 'max-h-[800px]'}`}>
        <div className="px-[12px] pt-[12px] mb-1">{RenderFilterOptions()}</div>
      </div>
    </section>
  );
};

export default FilterBox;

import { FilterType } from '../constants';
import FilterBox from './FilterBox';

const Filter = ({ query, handleSetQuery }: FilterProps) => (
  <div className="product-filter md:w-[272px]">
    <h2 className="text-[1.6rem] font-semibold mb-5">Filter By</h2>
    <FilterBox type={FilterType.PRICE} title="Price" query={query} handleSetQuery={handleSetQuery} />
    <FilterBox type={FilterType.STYLE} title="Style" query={query} handleSetQuery={handleSetQuery} />
    <FilterBox type={FilterType.COLOUR} title="Colour" query={query} handleSetQuery={handleSetQuery} />
    <FilterBox type={FilterType.FLUSHTYPE} title="Flush Type" query={query} handleSetQuery={handleSetQuery} />
    <FilterBox type={FilterType.PANTYPE} title="Pan Type" query={query} handleSetQuery={handleSetQuery} />
    <FilterBox type={FilterType.PROJECTION} title="Projection" query={query} handleSetQuery={handleSetQuery} />
    <FilterBox type={FilterType.WIDTH} title="Width" query={query} handleSetQuery={handleSetQuery} />
    <FilterBox type={FilterType.HEIGHT} title="Height" query={query} handleSetQuery={handleSetQuery} />
    <FilterBox
      type={FilterType.SOFTCLOSE}
      title="Soft Closing Seat"
      query={query}
      handleSetQuery={handleSetQuery}
    />
    <FilterBox type={FilterType.SHAPE} title="Shape" query={query} handleSetQuery={handleSetQuery} />
    <FilterBox type={FilterType.NEW} title="Newly Added" query={query} handleSetQuery={handleSetQuery} />
    <FilterBox type={FilterType.BRAND} title="Brand" query={query} handleSetQuery={handleSetQuery} />
    <FilterBox type={FilterType.SALE} title="On Sale" query={query} handleSetQuery={handleSetQuery} />
    <FilterBox type={FilterType.AVAILABILITY} title="Availability" query={query} handleSetQuery={handleSetQuery} />
    <FilterBox type={FilterType.TOILETS} title="Toilets" query={query} handleSetQuery={handleSetQuery} />
  </div>
);

export default Filter;

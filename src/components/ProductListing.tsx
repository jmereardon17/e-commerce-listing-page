import Filter from './Filter';
import Pagination from './Pagination';
import ProductCard from './ProductCard';

const ProductListing = ({ products, pagination, query, handleSetQuery }: any) => (
  <div className="flex flex-wrap justify-between w-full pt-10">
    <Filter query={query} handleSetQuery={handleSetQuery} />
    <section className="product-listing">
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <span className="absolute text-[#6f6f6f] top-1 left-3 text-[13px]">Sort By</span>
          <select
            onChange={e => handleSetQuery({ ...query, sort: e.target.value, pageNumber: 1 })}
            defaultValue={query.sort}
          >
            <option value="1">Recommended</option>
            <option value="2">Lowest Price</option>
            <option value="3">Highest Price</option>
            <option value="4">Highest discount</option>
          </select>
        </div>
        <p>{pagination.total} results</p>
      </div>
      <ul className="products">
        {products.map((product: any) => (
          <li key={product.id} className="md:w-[272.49px] md:mr-[1.8rem] [&:nth-child(3n)]:mr-0">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      {pagination.from < pagination.total && (
        <Pagination
          shownProducts={products.length}
          totalProducts={pagination.total}
          query={query}
          handleSetQuery={handleSetQuery}
        />
      )}
    </section>
  </div>
);

export default ProductListing;

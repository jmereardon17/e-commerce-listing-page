import { Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import { useEffect, useState } from 'react';

import ProductListing from './components/ProductListing';
import { handleGetProducts } from './helpers/handleGetProducts';
import Loader from './components/Loader';

const App = () => {
  const [query, setQuery] = useState<Query>({
    query: 'toilets',
    pageNumber: 1,
    size: 30,
    additionalPages: 0,
    sort: 1
  });

  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);

    handleGetProducts(query)
      .then(data => {
        setProducts(query.pageNumber > 1 ? [...products, ...data.products] : data.products);
        setPagination(data.pagination);

        if (query.pageNumber > 1) {
          window.setTimeout(() => {
            const nextNewProduct = document.querySelectorAll('.products li')[products.length - 1] as HTMLElement;
            window.scrollTo(0, nextNewProduct.offsetTop);
          }, 500);
        }
      })
      .finally(() => setIsLoaded(true));
  }, [query]);

  if (!isLoaded) return <Loader />;

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <ProductListing products={products} pagination={pagination} query={query} handleSetQuery={setQuery} />
          }
        />
        <Route path="/products/:id" element={<Product products={products} />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;

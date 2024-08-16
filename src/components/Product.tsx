import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Product = ({ products }: ProductProps) => {
  const { id } = useParams();
  const product = products.find(product => product.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!product) return navigate('/');
  }, [id]);

  const {
    productName,
    image: {
      url,
      attributes: { imageAltText }
    },
    price: { priceIncTax },
    stockStatus: { status },
    sku
  } = product;

  return (
    <>
      <section className="product">
        <div className="product-image-container">
          <img src={url} alt={imageAltText} width={450} height={450} />
        </div>
        <section className="product-details">
          <h2 className="product-name">{productName}</h2>
          <p className="product-sku">Part No.: {sku}</p>
          <p className="product-price">£{priceIncTax}</p>
          <div className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              aria-hidden="true"
              focusable="false"
              width={18}
              height={25}
              fill="none"
            >
              <path
                d="M24.1697.8333C24.7232 1.389 25 2.037 25 2.8703v19.3519c0 .7408-.2768 1.4815-.8303 2.0371-.5535.5555-1.1992.7407-2.0295.7407H2.8598c-.8303 0-1.476-.2778-2.0295-.8333C.2768 23.6111 0 22.963 0 22.2222V2.8704C0 2.037.2768 1.3889.8303.8334 1.3838.2777 2.0295 0 2.8598 0h19.2804c.8303 0 1.476.2778 2.0295.8333zM9.6864 19.9074L21.679 7.8704l-1.8451-1.8519L9.6863 16.2037l-4.6125-4.6296-1.845 1.8518 6.4575 6.4815z"
                fill="#32AA3C"
              ></path>
            </svg>
            {status === 'G' && <span className="ml-2">In Stock</span>}
          </div>
        </section>
      </section>
      <Link to="/" className="btn">
        Go Back
      </Link>
    </>
  );
};

export default Product;

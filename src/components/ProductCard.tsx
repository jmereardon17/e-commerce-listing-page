import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    id,
    brand,
    productName,
    image: {
      url,
      attributes: { imageAltText }
    },
    averageRating,
    price: { wasPriceIncTax, priceIncTax, isOnPromotion, discountPercentage, monthlyFinanceEstimate },
    reviewsCount,
    attributes: { isBestSeller, isShortProjection },
    stockStatus: { status }
  } = product;

  return (
    <>
      <section className="product-card flex flex-col">
        <div className="product-card-image-container">
          {isOnPromotion && (
            <span className="product-attribute product-attribute--sale">
              {discountPercentage ? `SAVE ${discountPercentage}%` : 'SALE'}
            </span>
          )}
          {isShortProjection && (
            <span className="product-attribute product-attribute--space-saver">SPACE SAVER</span>
          )}
          <Link to={`/products/${id}`}>
            <LazyLoadImage src={url} width={280} height={280} alt={imageAltText} className="product-card-image" />
          </Link>
          {isBestSeller && <div className="product-card-image-banner">Best seller</div>}
          <button type="button" className="product-image-btn">
            Quick View
          </button>
        </div>

        <div className="product-card-body">
          <LazyLoadImage
            src={brand.brandImage.url}
            width={60}
            height={19}
            alt={brand.name}
            className="block mb-2"
          />

          <div className="flex">
            <h3 className="product-name">{productName}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 24"
              aria-hidden="true"
              focusable="false"
              fill="none"
              width={45}
              height={25}
              className="cursor-pointer"
            >
              <path
                d="M18.254.5l1.0912.1984c.6945.0992 1.3889.3968 2.2818.8929.8928.496 1.5873 1.1904 2.2817 2.0833C24.6032 4.6666 25 5.9564 25 7.5436c0 1.5874-.6944 3.3731-1.9841 5.258-1.2897 1.8849-2.6786 3.5714-4.2659 5.1587-1.5873 1.5873-2.9762 2.877-4.2659 3.8691L12.5 23.3175l-1.9841-1.4881c-1.2897-.9921-2.6786-2.2818-4.266-3.8691-1.5872-1.5873-2.976-3.2738-4.2658-5.1587C.6944 10.9167 0 9.2302 0 7.5436c0-1.6864.3968-2.9762 1.0913-3.869.6944-.8929 1.3889-1.5873 2.2817-2.0833.8929-.496 1.5873-.7937 2.2818-.8929L6.746.5c2.9762.1984 4.9603 1.0913 5.754 2.4802C13.2936 1.492 15.1786.6984 18.254.5zm-5.8532 19.4445c1.6865-1.3889 3.0754-2.6786 4.3651-3.8691 1.2897-1.1905 2.2817-2.381 3.0754-3.4722.7936-1.0913 1.4881-1.9842 1.8849-2.877.3968-.8929.5952-1.5873.5952-2.2818 0-1.1904-.3968-2.2817-1.1905-3.1746-.7936-.8928-1.8849-1.2896-3.373-1.2896-.6944 0-1.3889.1984-2.0833.5952-.6945.3968-1.1905.7936-1.6865 1.2897-.496.496-.8929.8928-1.1905 1.2896l-.3968.5953-.3968-.5953c-.2977-.3968-.6945-.7936-1.1905-1.2896-.496-.496-1.0913-.8929-1.6865-1.2897-.5953-.3968-1.389-.5952-2.0834-.5952-1.488 0-2.5793.3968-3.373 1.2896-.7936.8929-1.1904 1.9842-1.1904 3.1746 0 .5953.1984 1.389.5952 2.2818.3968.8928.992 1.7857 1.885 2.877.8928 1.0912 1.8848 2.1825 3.0753 3.4722 1.1905 1.2897 2.7778 2.4802 4.3651 3.8691z"
                fill="green"
              ></path>
            </svg>
          </div>

          <div className="mb-2">
            <span className="product-price">£{priceIncTax}</span>
            {isOnPromotion && <span className="product-original-price">Was £{wasPriceIncTax}</span>}
          </div>

          {monthlyFinanceEstimate && (
            <p className="product-finance-option">Finance from £{monthlyFinanceEstimate}/month</p>
          )}

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

          {reviewsCount > 0 && (
            <div className="flex items-center">
              <div className="product-stars">
                <div className="product-star-rating" style={{ width: `${100 * (averageRating / 5)}%` }} />
              </div>
              <span className="text-[#6f6f6f]">{reviewsCount}</span>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductCard;

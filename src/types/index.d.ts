declare type FilterProps = {
  query: Query;
  handleSetQuery: Dispatch<SetStateAction<Query>>;
};

declare type FilterBoxProps = {
  type: FilterType;
  title: string;
  maxOptionsShown?: number;
  isCollapsed?: boolean;
  query: Query;
  handleSetQuery: Dispatch<SetStateAction<Query>>;
};

declare type PaginationProps = {
  shownProducts: number;
  totalProducts: number;
  query: Query;
  handleSetQuery: Dispatch<SetStateAction<Query>>;
};

declare type ProductProps = {
  products: Products[];
};

declare type ProductCardProps = {
  product: Product;
};

declare type ProductListingProps = {
  products: array;
  pagination: object;
  query: Query;
  handleSetQuery: Dispatch<SetStateAction<object>>;
};

declare type ProgressBarProps = {
  start: number;
  end: number;
};

declare type Query = {
  query: 'toilets';
  pageNumber: number;
  size: number;
  additionalPages: number;
  sort: number;
  facets?: Facets;
};

declare type Facets = {
  prices: FilterValue;
  toiletStyle: FilterValue;
  colour: FilterValue;
  flushType: FilterValue;
};

declare type FilterValue = {
  identifier: string;
  value: object;
};

declare type Products = {
  products: Product[];
};

declare type Product = {
  id: string;
  brand: ProductBrand;
  productName: string;
  image: ProductImage;
  averageRating: number;
  price: ProductPrice;
  reviewsCount: number;
  attributes: ProductAttributes;
  stockStatus: Status;
};

declare type ProductBrand = {
  brandImage: Image;
  name: string;
};

declare type ProductPrice = {
  wasPriceIncTax: number;
  priceIncTax: number;
  isOnPromotion: number;
  discountPercentage: number;
  monthlyFinanceEstimate: number;
};

declare type ProductAttributes = {
  isBestSeller: boolean;
  isShortProjection: boolean;
};

declare type ProductStatus = {
  status: 'G';
};

declare type Image = {
  url: string;
  attributes: ImageAttributes;
};

declare type ImageAttributes = {
  imageAltText: string;
};

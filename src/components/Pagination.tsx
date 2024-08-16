import ProgressBar from './ProgressBar';

const Pagination = ({ shownProducts, totalProducts, query, handleSetQuery }: PaginationProps) => (
  <section className="pagination flex flex-col items-center">
    <p className="pb-5">
      You've viewed {shownProducts} of {totalProducts} results
    </p>
    <ProgressBar start={shownProducts} end={totalProducts} />

    {shownProducts < totalProducts && (
      <button
        type="button"
        onClick={() => handleSetQuery({ ...query, pageNumber: query.pageNumber + 1 })}
        className="btn pagination-btn"
      >
        Load More
      </button>
    )}
  </section>
);

export default Pagination;

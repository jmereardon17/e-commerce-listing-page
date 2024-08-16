const ProgressBar = ({ start, end }: ProgressBarProps) => (
  <div className="pagination-progress-bar">
    <div className="pagination-progress" style={{ width: `${Math.ceil((start / end) * 100)}%` }} />
  </div>
);

export default ProgressBar;

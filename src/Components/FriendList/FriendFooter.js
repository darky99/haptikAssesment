export default function FriendFooter(props) {
  const { page, onNextClick, onPrevClick, disa } = props;
  return (
    <div className="custFooter">
      <div className="pagination">
        <button
          className="arrowBtn"
          onClick={onPrevClick}
          disabled={page === 1}
        >
          &#8249;
        </button>
        <span>{page}</span>
        <button className="arrowBtn" onClick={onNextClick} disabled={disa}>
          &#8250;
        </button>
      </div>
    </div>
  );
}

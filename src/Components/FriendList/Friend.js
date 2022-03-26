export default function Friend(props) {
  const { data, fav, deleteFriend } = props;
  return (
    <div className="paperBlock">
      <div className="content nameCont">
        <p>{data?.name}</p>
        <span> is your friend</span>
      </div>

      <div className="content">
        <button
          className={data?.favourite ? "btnClicked" : "btn"}
          onClick={() => {
            fav(data?.id);
          }}
        >
          <i className="fa fa-star"></i>
        </button>
      </div>
      <div className="content">
        <button
          className="btn"
          onClick={() => {
            window.confirm("Are you sure you want to Delete ");
            deleteFriend(data.id);
          }}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

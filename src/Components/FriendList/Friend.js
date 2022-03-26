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
          class="btn"
          onClick={() => {
            fav(data.id);
          }}
        >
          <i class="fa fa-star"></i>
        </button>
      </div>
      <div className="content">
        <button
          class="btn"
          onClick={() => {
            deleteFriend(data.id);
          }}
        >
          <i class="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

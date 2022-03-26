import Friend from "./Friend";
export default function FriendList(props) {
  const { data, fav, deleteFriend, searchFriend } = props;
  return (
    <div className="friendList">
      <input
        placeholder={"Search for friend"}
        onChange={(e) => {
          const { value } = e.target;
          console.log(value);
          searchFriend(value);
        }}
      />
      {data?.map((friend) => {
        return <Friend data={friend} fav={fav} deleteFriend={deleteFriend} />;
      })}
    </div>
  );
}

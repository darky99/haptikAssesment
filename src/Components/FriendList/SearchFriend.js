import { useState } from "react";

export default function FriendList(props) {
  const { searchFriend } = props;
  return (
    <div className="searchFriend">
      <input
        className="searchField"
        placeholder={"Search for friend"}
        onChange={(e) => {
          const { value } = e.target;
          searchFriend(value);
        }}
      />
    </div>
  );
}

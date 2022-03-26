import { useEffect, useState } from "react";
import Friend from "./Friend";
import SearchFriend from "./SearchFriend";
import FriendFooter from "./FriendFooter";

export default function FriendList(props) {
  const { data, fav, deleteFriend } = props;
  const [filterData, setFilterData] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  useEffect(() => {
    if (4 * pageNo >= filterData.length) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [pageNo, filterData]);
  const searchFriend = (searchInput) => {
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilterData(filteredData);
    } else {
      setFilterData(data);
    }
  };

  const onNextClick = () => {
    setPageNo(pageNo + 1);
  };

  const onPrevClick = () => {
    setPageNo(pageNo - 1);
  };

  return (
    <div className="friendList">
      <div className="boxHeader">
        <h3>Friends List</h3>
      </div>
      <SearchFriend searchFriend={searchFriend} />
      {filterData.slice(pageNo === 1 ? 0 : (pageNo - 1) * 4, 4 * pageNo)
        .length === 0 ? (
        <p>No Data,go To prev page</p>
      ) : (
        filterData &&
        filterData
          .slice(pageNo === 1 ? 0 : (pageNo - 1) * 4, 4 * pageNo)
          .map((friend) => {
            //console.log(friend.id);
            return (
              <Friend
                key={friend.id}
                data={friend}
                fav={fav}
                deleteFriend={deleteFriend}
              />
            );
          })
      )}
      <FriendFooter
        page={pageNo}
        onNextClick={onNextClick}
        onPrevClick={onPrevClick}
        disa={disable}
      />
    </div>
  );
}

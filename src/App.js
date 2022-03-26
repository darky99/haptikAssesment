import { useEffect, useState } from "react";
import AddFriend from "./Components/AddFriend";
import FriendList from "./Components/FriendList/FriendList";
import "./styles.css";

export default function App() {
  const friendsList = [
    {
      id: 1,
      name: "Rahul Gupta",
      favourite: true
    },
    {
      id: 2,
      name: "Shivangi Sharma",
      favourite: true
    },
    {
      id: 3,
      name: "Akash Singh",
      favourite: true
    }
  ];
  const [friendsData, setFriendsData] = useState(friendsList);

  const addFav = (x) => {
    let tempData = [...friendsData];
    for (let i = 0; i < tempData.length; i++) {
      if (tempData[i].id === x) {
        tempData[i].favourite = false;
      }
    }
    setFriendsData(tempData);
  };

  const deleteFriend = (x) => {
    let tempData = [...friendsData];
    let result = [];
    for (let i = 0; i < tempData.length; i++) {
      if (tempData[i].id !== x) {
        result.push(tempData[i]);
      }
    }
    setFriendsData(result);
  };

  const addFriend = (friendName) => {
    let tempData = [...friendsData];
    let obj = {
      id: parseInt(Math.random()),
      name: friendName,
      favourite: false
    };

    tempData.push(obj);
    setFriendsData(tempData);
  };

  const searchFriend = (str) => {
    let tempData = [...friendsData];
    let result = [];
    for (let i = 0; i < tempData; i++) {
      if (tempData[i].name.includes(str)) {
        console.log(tempData[i]);
        result.push(tempData[i]);
      }
    }
    setFriendsData(result);
  };
  return (
    <div className="App">
      <AddFriend onclick={addFriend} />
      <div className="centerBlock">
        <FriendList
          data={friendsData}
          fav={addFav}
          deleteFriend={deleteFriend}
          searchFriend={searchFriend}
        />
      </div>
    </div>
  );
}

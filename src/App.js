import { useState } from "react";
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
    },
    {
      id: 4,
      name: "Akash Singh",
      favourite: true
    },
    {
      id: 5,
      name: "Akash Singh",
      favourite: true
    },
    {
      id: 6,
      name: "Akash Singh",
      favourite: true
    }
  ];
  const [friendsData, setFriendsData] = useState(friendsList);

  const addFav = (x) => {
    let tempData = [...friendsData];
    for (let i = 0; i < tempData.length; i++) {
      if (tempData[i].id === x) {
        tempData[i].favourite = !tempData[i].favourite;
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
      id: Math.floor(Math.random() * (10 ** 3 - 10 + 1)) + 10,
      name: friendName,
      favourite: false
    };

    //console.log("obj", obj);

    tempData.push(obj);
    setFriendsData(tempData);
  };

  // const searchFriend = (str) => {
  //   console.log("str", str);
  //   let tempData = [...friendsData];
  //   let result = [];
  //   for (let i = 0; i < tempData.length; i++) {
  //     console.log(tempData[i].name.indexOf(str));
  //     if (tempData[i].name.indexOf(str) !== -1) {
  //       console.log(tempData[i]);
  //       result.push(tempData[i]);
  //     }
  //   }
  //   setFriendsData(result);
  // };
  return (
    <div className="App">
      <AddFriend onclick={addFriend} />
      <div className="centerBlock">
        <FriendList
          data={friendsData}
          fav={addFav}
          deleteFriend={deleteFriend}
        />
      </div>
    </div>
  );
}

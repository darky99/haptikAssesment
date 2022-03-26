import { useEffect, useState } from "react";
export default function AddFriend(props) {
  const { onclick } = props;
  const [name, setName] = useState();
  return (
    <div className="addFrnd">
      <input
        id="myInput"
        type="text"
        placeholder="Enter Friends Name"
        onChange={(e) => {
          const { value } = e.target;
          setName(value);
        }}
        value={name}
      />
      <button
        onClick={() => {
          onclick(name);
          setName("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

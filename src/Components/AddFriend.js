import { useState } from "react";
export default function AddFriend(props) {
  const { onclick } = props;
  const [name, setName] = useState("");
  return (
    <div className="addFrnd">
      <input
        id="myInput"
        type="text"
        className="addField"
        placeholder="Enter Friends Name"
        onChange={(e) => {
          const { value } = e.target;
          setName(value);
        }}
        value={name}
      />
      <button
        onClick={() => {
          if (name.length > 0) {
            onclick(name);
          } else {
            alert("Please enter name");
          }
          setName("");
        }}
        className="addBtn"
      >
        ADD
      </button>
    </div>
  );
}

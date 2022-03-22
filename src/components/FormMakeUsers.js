import React, { useRef, useState } from "react";
import RadioButton from "./RadioButton";
import { nanoid } from "nanoid";

function FormMakeUsers(props) {
  const [userName, setUserName] = useState();
  const [favorite, setFavorite] = React.useState(null);
  const genders = ["Male", "Female", "Other"];

  //---
  // const obj = { name: userName, gender: favorite };
  //---

  const [userList, setUserList] = useState([]);
  // const inputRef = useRef();

  const clickButtonSave = (event) => {
    event.preventDefault(); // снимает дэфолтное значение
    setUserList((userList) => {
      return [
        ...userList,
        { name: userName, gender: favorite, id: nanoid(10) },
      ];
    });
  };
  let res = userList.map((item) => {
    return (
      <div>
        <p>{item.name} </p>
        <p>{item.gender} </p>
        <p>{item.id} </p>
      </div>
    );
  });

  return (
    <>
      <form>
        <h1 className="title">Make User Great Again</h1>
        <div className="userName">
          <p>User name |</p>
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          ></input>
        </div>
        <div className="userGender">
          <p>User gender |</p>
          {genders.map((item) => (
            <RadioButton
              label={item}
              value={favorite === item}
              onChange={() => setFavorite(item)}
            />
          ))}
        </div>
        <input
          type="submit"
          value="Save"
          disabled={userName && favorite ? false : true}
          onClick={clickButtonSave}
        ></input>
        {/* <button
          // value={userName}
          // disabled={userName && favorite ? false : true}
          onChange={clickButtonSave}
        >
          Save
        </button> */}
      </form>
      {/* --- */}
      <div>{res}</div>
      {/* --- */}
    </>
  );
}
export default React.memo(FormMakeUsers);

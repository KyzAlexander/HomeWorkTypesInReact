import React, { useState } from "react";
import RadioButton from "./RadioButton.js";

function FormMakeUsers(props) {
  const [userName, setUserName] = useState();
  const [favorite, setFavorite] = React.useState(null);
  const genders = ["Male", "Female", "Other"];

  //---
  // const obj = { name: userName, gender: favorite };
  //---
  const [userList, setUserList] = useState([]);

  const clickButtonSave = () => {
    setUserList(() => {
      userList.push({ name: userName, gender: favorite });
      // user = user.name;
      // console.log(userCards);
    });
  };

  return (
    <>
      <form>
        <h1 className='title'>Make User Great Again</h1>
        <div className='userName'>
          <p>User name |</p>
          <input
            type='text'
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          ></input>
        </div>
        <div className='userGender'>
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
          type='submit'
          value='Save'
          disabled={userName && favorite ? false : true}
          onChange={clickButtonSave}
        ></input>
      </form>
      {/* --- */}
      <div>{userList}</div>
      {/* --- */}
    </>
  );
}
export default React.memo(FormMakeUsers);

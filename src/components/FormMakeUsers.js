import React, { useState } from "react";
import RadioButton from "./RadioButton.js";

function FormMakeUsers(props) {
  const [userName, setUserName] = useState();
  const [favorite, setFavorite] = React.useState("");

  const handleMaleChange = () => {
    setFavorite("Male");
  };
  const handleFemaleChange = () => {
    setFavorite("Female");
  };
  const handleOtherChange = () => {
    setFavorite("Other");
  };
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
          <RadioButton
            label='Male'
            value={favorite === "Male"}
            onChange={handleMaleChange}
          />
          <RadioButton
            label='Female'
            value={favorite === "Female"}
            onChange={handleFemaleChange}
          />
          <RadioButton
            label='Other'
            value={favorite === "Other"}
            onChange={handleOtherChange}
          />
        </div>
        <input
          type='submit'
          value='Save'
          disabled={userName && favorite ? false : true}
          onClick={clickButtonSave}
        ></input>
      </form>
      {/* --- */}
      <div>{userList}</div>
      {/* --- */}
    </>
  );
}
export default React.memo(FormMakeUsers);

import React, { useState } from "react";
import RadioButton from "./RadioButton";
import { nanoid } from "nanoid";
import UserList from "./UserList";
type Users = {name: string, gender: string, id: string}

function FormMakeUsers() {
  const [userName, setUserName] = useState<string>('');
  const [favorite, setFavorite] = React.useState('');
  const genders: string[] = ["Male", "Female", "Other"];

  const [userList, setUserList] = useState<Users[]>([]);

  const clickButtonSave = (event: any) => {
    event.preventDefault(); // снимает дэфолтное значение
    setUserName("");
    // <RadioButton checked={false} />;
     
    setUserList((userList) => {
      return [
        ...userList,
        { name: userName, gender: favorite, id: nanoid(10) },
      ];
    });
    // return <RadioButton checked={false} />;
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
            onChange={(event: any) => setUserName(event.target.value)}
          ></input>
        </div>
        <div className='userGender'>
          <p>User gender |</p>
          {genders.map((item: any) => (
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
          onClick={clickButtonSave}
        ></input>
      </form>

      <UserList users={userList} />
    </>
  );
}
export default React.memo(FormMakeUsers);

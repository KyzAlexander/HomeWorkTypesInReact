import React, { useCallback, useState } from "react";
import RadioButton from "./RadioButton";
import { nanoid } from "nanoid";
import UserList from "./UserList";

type User = {name: string, gender: string, id: string}

const genders: string[] = ["Male", "Female", "Other"];

function FormMakeUsers() {
  const [userName, setUserName] = useState<string>('');
  const [gender, setGender] = React.useState(''); 

  const [userList, setUserList] = useState<User[]>([]);
  
  const inputOnChange = useCallback((event) => {
    setUserName(event.target.value)
  }, [setUserName])

  const clickButtonSave = useCallback ((event)=> { // используется хук useCallback, чтобы ф-ция не пересоздавалась каждый раз при рендере компонента
    event.preventDefault(); // снимает дэфолтное значение
    setUserName("");    
    setGender("")
    setUserList((userList) => {
      return [
        ...userList,
        { name: userName, gender: gender, id: nanoid(15) },
      ];
    });
  }, [setUserList, setUserName, userName, gender])

  return (
    <>
      <form>
        <h1 className='title'>Make User Great Again</h1>
        <div className='userName'>
          <p>User name </p>
          <input
            type='text'
            value={userName}            
            onChange={inputOnChange}
          ></input>
        </div>
        <div className='userGender'>
          <p>User gender </p>
          {genders.map((item: string) => (
            <RadioButton
              label={item}
              value={gender === item}
              onChange={() => setGender(item)}
            />
          ))}
        </div>
        <input
          type='submit'
          value='Save'
          disabled={userName && gender ? false : true}
          onClick={clickButtonSave}
        ></input>
      </form>

      <UserList users={userList} />
     
    </>
  );
}
export default React.memo(FormMakeUsers);

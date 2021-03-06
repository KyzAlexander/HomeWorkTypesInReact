import React from "react";
import './UserList.css'

interface UserListProps {users: {name: string, gender: string, id: string}[]}

  const UserList = ({users}: UserListProps) => {    
  if (users.length) {  
      return (
        <>
        <div className="totalUsers">
          Total users: {users.length}
        </div>
        <ul> 
          {users.map((item: any) => 
            <li>
              <p> User name:</p>              
              {item.name}
              <p> User gender:</p>              
              {item.gender}
              <p> User id:</p>              
              {item.id}
            </li>
          )}         
        </ul>          
        </>
      );    
  } else {
    return <p>No users</p>;
  } 
}

export default React.memo(UserList);

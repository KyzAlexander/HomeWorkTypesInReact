import React from "react";
type User = {users: {name: string, gender: string, id: string}[]}

const UserList: React.FC<User> = ({ users }) => {
  if (users.length) {
    users.map((item) => {
      return (
        <div>
          Total users: {users.length}
          <ul>
            <li>
              <p> User name:</p>
              {item.name}
            </li>
            <li>
              <p> User gender:</p>
              {item.gender}
            </li>
            <li>
              <p> User id:</p>
              {item.id}
            </li>
          </ul>
        </div>
      );
    });
  } else {
    return <div>No users</div>;
  }
 
}
export default UserList;

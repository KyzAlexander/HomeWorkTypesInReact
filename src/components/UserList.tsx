import React from "react";
// type User = {props:{name: string, gender: string, id: string}[]} // без ошибок
interface User {users: {name: string, gender: string, id: string}[]}

// const UserList: React.FC<User> = ({ props }) => { // без ошибок
  const UserList = ({users}: User) => { 
    
    // const users = {props};
  // if (props.length) {
  //   props.map((item) => {
  //     return (
  //       <div>
  //         Total users: {props.length}
  //         <ul>
  //           <li>
  //             <p> User name:</p>
  //             {item.name}
  //           </li>
  //           <li>
  //             <p> User gender:</p>
  //             {item.gender}
  //           </li>
  //           <li>
  //             <p> User id:</p>
  //             {item.id}
  //           </li>
  //         </ul>
  //       </div>
  //     );
  //   });
  // } else {
  //   return <div>No users</div>;
  // }
  if (users.length) {    
    // let arr = Object.values(users).map((item: any) => <div>{item}</div>)
      // return (
      //   <div>
      //     Total users: {users.length}
      //     <ul>
      //       <li>
      //         <p> User name:</p>              
      //         {users.map((item: any) => {item.name})}
      //       </li>
      //       <li>
      //         <p> User gender:</p>              
      //         {users.map((item: any) => <div>{item.gender}</div>)}
      //       </li>
      //       <li>
      //         <p> User id:</p>              
      //         {users.map((item: any) => <div>{item.id}</div>)}
      //       </li>
      //     </ul>
      //   </div>
      // );
      return (
        <>
        <div>
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
export default UserList;

import React from "react";
function FormMakeUsers(props) {
  const value = props.value;
  return (
    <div>
      <h1 className='title'>Make User Great Again</h1>
      <div className='name'>
        <p>User name |</p>
        <input type='text'></input>
      </div>
      <div className='gender'>
        <p>User gender |</p>
        <label>
          Male<input type='radio'></input>
        </label>
        <label>
          Female<input type='radio'></input>
        </label>
        <label>
          Other<input type='radio'></input>
        </label>
      </div>
      <input type='button' value='Save'></input>
    </div>
  );
}
export default React.memo(FormMakeUsers);

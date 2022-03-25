import React from "react";
 function RadioButton({ label, value, onChange }: any) {
  return (
    <label>
      {label}
      <input type='radio' checked={value} onChange={onChange}></input>
    </label>
  );
}
export default React.memo(RadioButton)
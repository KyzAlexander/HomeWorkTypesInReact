export default function RadioButton({ label, value, onChange }) {
  return (
    <label>
      {label}
      <input type='radio' checked={value} onChange={onChange}></input>
    </label>
  );
}

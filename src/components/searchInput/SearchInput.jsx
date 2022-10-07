import React from "react";

function SearchInput({ type, value, placeholder, handleChange }) {
  return (
    <>
      <div className="field">
        <input className="input-field" type={type} value={value} placeholder={placeholder} onChange={handleChange} />
      </div>
    </>
  );
}
export default SearchInput;

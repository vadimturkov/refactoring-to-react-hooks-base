import React from 'react';

const Select = ({ handleChange, id, label, options }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={handleChange}>
        <option value=''>--</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;

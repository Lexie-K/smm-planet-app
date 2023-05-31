import React from 'react';

const SelectBar = ({ role, options, onChange }) => {
  return (
    <label>
      <select value={role} onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default SelectBar;

import React, { useState } from 'react'

const AddCategory = ({setCategories}: {setCategories: any}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.FocusEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((categories: string) => [inputValue, ...categories]);
    }
    setInputValue("");
    setCategories([inputValue]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search..."
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default AddCategory
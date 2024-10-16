import { useState } from "react";

export const Name = ({ value, updateFormData }) => {
  // Function to handle user input and update the form's name field
  const handleNameChange = (e) => {
    // Call updateFormData to update the "name" field with the input's current value
    updateFormData("name", e.target.value);
  };

  return (
    <div>
      {/* Label for the name input field */}
      <label>Your superhero name:</label>
      {/* Input field to capture the user's name, with the value controlled by the "value" prop */}
      {/* The onChange event triggers the handleNameChange function to update the form data */}
      <input type="text" value={value} onChange={handleNameChange} />
    </div>
  );
};

// I am practicing git
<p>Hello</p>
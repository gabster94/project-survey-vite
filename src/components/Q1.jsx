/**
 * This component is used to collect and update the user's name in a multi-step form.
 * It demonstrates how to handle form inputs in React using the useState hook indirectly (from a parent component).
 * The Name component receives the current name value and an update function as props, and updates the form data whenever the user types.
 * This file is intended to help students understand how to pass down state and functions in React, while keeping the input's state in sync.
 */

export const Name = ({ value, updateFormData }) => {
  // Function to handle user input and update the form's name field
  const handleNameChange = (e) => {
    // Call updateFormData to update the "name" field with the input's current value
    updateFormData("name", e.target.value);
  };

  return (
    <div>
      {/* Label for the name input field */}
      <label>What would your superhero name be?</label>

      {/* Input field to capture the user's name, with the value controlled by the "value" prop */}
      {/* The onChange event triggers the handleNameChange function to update the form data */}
      <input type="text" value={value} onChange={handleNameChange} />
    </div>
  );
};
import PropTypes from "prop-types";

// function in which users can write their favourite superhero name

export const Name = ({ value, updateFormData }) => {
  const handleNameChange = (e) => {
    updateFormData("name", e.target.value);
  };

  return (
    <div>
      <label>What would your superhero name be?</label>
      <input type="text" value={value} onChange={handleNameChange} />
    </div>
  );
};


// props validation
Name.PropTypes = {
  value: PropTypes.string.isRequired,
  updateFormData: PropTypes.func.isRequired,
}
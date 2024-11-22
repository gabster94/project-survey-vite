import PropTypes from "prop-types"
import "./name.css"

// function in which users can write their favourite superhero name
export const Name = ({ value, updateFormData }) => {
  const handleNameChange = (e) => {
    updateFormData("name", e.target.value)
  }
  return (
    <>
      <div className="name-form-container">
        <p id="name-description">
          Pick a name! How do you want to be known in the world of superheroes? Captain Lightning? Lady Starlight? The Unstoppable Rubber Band? Let your imagination run wild and give your alter ego a name that screams heroism!
        </p>
        <label className="label-text-name" htmlFor="superhero-name">
          Enter your favourite superhero name:
        </label>
        <input
          className="name-input"
          type="text"
          id="superhero-name"
          value={value}
          onChange={handleNameChange}
          aria-label="Superhero name"
          aria-describedby="name-description"
          placeholder="Type your superhero name"
        />
      </div>
    </>
  )
}

// props validation
Name.propTypes = {
  value: PropTypes.string.isRequired,
  updateFormData: PropTypes.func.isRequired,
}
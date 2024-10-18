// RadioButtons to select a superhero strength
import { useState } from "react";
import PropTypes from "prop-types";
import "./strength.css"

export const SuperheroStrength = ({ updateFormData, value }) => {
    const [strength, setStrength] = useState(value)
    const handleStrengthChange = (event) => {
        const selectedStrength = event.target.value;
        setStrength(selectedStrength);
        updateFormData("strength", selectedStrength); // Update parent state
    };
    return (
        <form className="form-strength">
            What’s a superhero without an epic superpower? 💥 It is your choice:
            <label className="label-strength">
                <input
                    type="radio"
                    value="Superhuman Strength"
                    onChange={handleStrengthChange}
                    checked={strength === "Superhuman Strength"}
                />
                Superhuman Strength
            </label>
            <label className="label-strength">
                <input
                    type="radio"
                    value="Telekinesis"
                    onChange={handleStrengthChange}
                    checked={strength === "Telekinesis"}
                />
                Telekinesis
            </label>
            <label className="label-strength">
                <input
                    type="radio"
                    value="Time Manipulation"
                    onChange={handleStrengthChange}
                    checked={strength === "Time Manipulation"}
                />
                Time Manipulation
            </label>
        </form>
    )
}

// PropTypes validation

SuperheroStrength.propTypes = {
    value: PropTypes.string.isRequired,
    updateFormData: PropTypes.func.isRequired,
}


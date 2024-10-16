// RadioButtons
import { useState } from "react";

export const SuperheroStrength = ({ updateFormData, value }) => {
    const [strength, setStrength] = useState(value)
    const handleStrengthChange = (event) => {
        const selectedStrength = event.target.value;
        setStrength(selectedStrength);
        updateFormData("strength", selectedStrength); // Update parent state
    };
    return (
        <form>
            Superhero Strength: What kind of strength would you like to have?
            <label>
                <input
                    type="radio"
                    value="Superhuman Strength"
                    onChange={handleStrengthChange}
                    checked={strength === "Superhuman Strength"}
                />
                Superhuman Strength
            </label>
            <label>
                <input
                    type="radio"
                    value="Telekinesis"
                    onChange={handleStrengthChange}
                    checked={strength === "Telekinesis"}
                />
                Telekinesis
            </label>
        </form>
    )
}


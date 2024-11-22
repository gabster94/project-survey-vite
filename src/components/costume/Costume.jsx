import PropTypes from "prop-types"
import "./costume.css"

// User can select favourite costume
export const Costume = ({ value, updateFormData }) => {
    const handleCostumeChange = (e) => {
        updateFormData("costume", e.target.value)
    }
    return (
        <div className="container-costume">
            <form className="form-container-costume">
                <label className="label-costume" htmlFor="costume-select">
                    Every superhero needs the perfect outfit. What would your superhero costume be made of?
                </label>

                <select
                    className="costume-input"
                    id="costume-select"
                    aria-label="Select superhero costume material"
                    value={value}
                    onChange={handleCostumeChange}>
                    <option value="">Select your costume:</option>
                    <option value="Glitter and Spandex">Glitter and spandex</option>
                    <option value="Rubber and Feathers">Rubber and feathers</option>
                    <option value="Cardboard and Duct Tape">Cardboard and duct tape</option>
                </select>
            </form>
        </div>
    )
}

// PropTypes validation
Costume.propTypes = {
    value: PropTypes.string.isRequired,
    updateFormData: PropTypes.func.isRequired,
}
import PropTypes from "prop-types";
import "./costume.css"

// User can select favourite costume

export const Costume = ({ value, updateFormData }) => {
    const handleCostumeChange = (e) => {
        updateFormData("costume", e.target.value);
    };

    return (
        <div className="container-costume">
            <form className="form-container-costume">
                <label className="label-costume">What would your superhero costume be made of?</label>

                <select value={value} onChange={handleCostumeChange}>
                    <option value="">Select costume:</option>
                    <option value="glitter">Glitter and spandex</option>
                    <option value="rubber">Rubber and feathers</option>
                    <option value="cardboard">Cardboard and duct tape</option>
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
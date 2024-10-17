
// User can select favourite costume

export const Costume = ({ updateFormData, value }) => {
    const handleCostumeChange = (e) => {
        updateFormData("costume", e.target.value);
    };

    return (
        <form>
            <label>What would your superhero costume be made of?</label>

            <select value={value} onChange={handleCostumeChange}>
                <option value="">Select costume:</option>
                <option value="glitter">Glitter and spandex</option>
                <option value="rubber">Rubber and feathers</option>
                <option value="cardboard">Cardboard and duct tape</option>
            </select>
        </form>
    )
}

// Jennies suggestion
// const Dropdown = () => {
//     const [costume, setCostume] = useState("");

//     return (
//         <form>
//             <label>What would your superhero costume be made of?</label>
//             <select onChange={event => setCostume(event.target.value)}
//                 value={costume}>
//                 <option value="">Select costume:</option>
//                 <option value="">Glitter and spandex</option>
//                 <option value="">Rubber and feathers</option>
//                 <option value="">Cardboard and duct tape</option>
//             </select>
//         </form>
//     )
// }



// Diegos suggestion
export const Costume = ({ updateFormData, value }) => {
    // Function to handle the user's selection and update the form's favoriteBand field
    const handleCostumeChange = (e) => {
      // Call updateFormData to update the "favoriteBand" field with the selected value
      updateFormData("costume", e.target.value);
    };

    return (
        <form>
            {/* Label for the favorite band dropdown */}
            <label>What would your superhero costume be made of?</label>

            {/* Dropdown to select the user's favorite band, controlled by the "value" prop */}
            {/* The onChange event triggers the handleFavoriteBandChange function to update the form data */}
            <select value={value} onChange={handleCostumeChange}>
                <option value="">Select costume:</option>
                <option value="">Glitter and spandex</option>
                <option value="">Rubber and feathers</option>
                <option value="">Cardboard and duct tape</option>
            </select>
        </form>
    )
}
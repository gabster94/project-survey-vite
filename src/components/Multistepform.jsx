import { useState } from "react";
import { Name } from "./name/Name.jsx";
import { Costume } from "./costume/Costume.jsx";
import { SuperheroStrength } from "./strength/Strength.jsx";

// Component: MultiStepForm
export const MultiStepForm = () => {
  // State to store form data for each field (name, age, email, favorite band, album, artist)
  const [formData, setFormData] = useState({
    name: "",
    costume: "",
    strength: "",
  });

  // State to track whether the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);

  // State to track the current step (1 through 2?)
  const [currentStep, setCurrentStep] = useState(1);

  // Function to update form data based on the provided field (key) and value
  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };


  // Function to move to the next step in the form, with validation at each step
  const nextStep = () => {
    if (currentStep <= 3) {
      // Validate the current step's data before proceeding
      switch (currentStep) {
        case 1:
          // If the name field is not empty, go to the next step, otherwise show an alert
          if (formData.name.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please enter your name");
          break;
        case 2:
          // If the costume field is not empty, go to the next step, otherwise show an alert
          if (formData.costume.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please select your favorite costume");
        //   break;
        // case 3:
        //   if (formData.strength.trim() !== "") {
        //     alert("Please select your superhero strength");
        //   }
          break;
        default:
          // if none of the above, proceed to the next step automatically
          // setCurrentStep(currentStep + 1)
      }
    }
  };



  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Function to submit the form, log the form data, and display it
  const submitForm = () => {
    // Validate the strength field before submission
    if (formData.strength.trim() === "") {
      alert("Please select your superhero strength");
      return; // Stop form submission if validation fails
    }

     // If validation passes, proceed with form submission
    console.log(formData);
    setFormSubmitted(true); // Set form as submitted
    // Format the form data for displaying in the alert
    const formattedData = `
    Superhero Name: ${formData.name}
    Favorite Costume: ${formData.costume}
    Superhero Strength: ${formData.strength}
    `;
    alert(formattedData); // Display the formatted data in an alert
  };

  // ---
  // ---

  // Function to reset the form data and start the process over
  const startOver = () => {
    // Clear the form data and reset to the first step
    setFormData({
      name: "",
      costume: "",
      strength: "",
    });
    setFormSubmitted(false); // Reset form submission state
    setCurrentStep(1); // Reset to the first step
  };

  return (
    <div>
      {formSubmitted ? (
        <h2>Thanks for Voting!</h2>
      ) : (
        <p>Hallo!</p>
      )}

      {/* Render the Name component on step 1 */}
      {currentStep === 1 && (
        <Name 
          value={formData.name} 
          updateFormData={updateFormData} 
        />
      )}
      {/* Render the Costume component on step 2 */}
      {currentStep === 2 && (
        <Costume 
          value={formData.costume} 
          updateFormData={updateFormData} 
        />
      )}
      {/* Render the radiobutton component on step 3 */}
      {currentStep === 3 && (
        <SuperheroStrength 
          value={formData.strength} 
          updateFormData={updateFormData} 
        />
      )}
      {/* Navigation buttons for moving between steps */}
      {!formSubmitted && (
        <div>
          {/* Show "Back" button if not on the first step */}
          {currentStep > 1 && <button className="button" onClick={prevStep}>Back</button>}
          {/* Show "Next" button or "Submit" button depending on the step */}
          {currentStep < 3 ? (
            <button className="button" onClick={nextStep}>Next</button>
          ) : (
            <button className="button" onClick={submitForm}>Submit Form</button>
          )}
        </div>
      )}

      {/* Display the form data after submission */}
      {formSubmitted && (
        <div>
          <h3>Voting Information</h3>
          <p>Name: {formData.name}</p>
          <p>Favorite Costume: {formData.costume}</p>
          <p>Superhero Strength: {formData.strength}</p>
          {/* Button to reset the form and start over */}
          <button className="button" onClick={startOver}>Start Over</button>
        </div>
      )}
    </div>
  );
};
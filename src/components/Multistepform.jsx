import { useState } from "react";
import { Name } from "./name/Name.jsx";
import { Costume } from "./costume/Costume.jsx";
import { SuperheroStrength } from "./strength/Strength.jsx";


// Component: MultiStepForm
export const MultiStepForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    costume: "",
    strength: "",
  });

  // State to track whether the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);

  // Function to update form data based on the provided field (key) and value
  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  // Function to move to the next step in the form, with validation at each step
  const nextStep = () => {
    if (currentStep < 3) {
      switch (currentStep) {

        case 1:
          if (formData.name.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please enter your name");
          break;

        case 2:
          if (formData.costume.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please select your favorite costume");
          break;

        case 3:
          if (formData.strength.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please select your superhero strength");
          break;

        default:
          setCurrentStep(currentStep + 1)
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Function to submit the form, log the form data, and display it
  const submitForm = () => {
    setFormSubmitted(true);

    const formattedData = `
    Superhero Name: ${formData.name}
    Favorite Costume: ${formData.costume}
    Superhero Strength: ${formData.strength}
    `;
    alert(formattedData);
  };

  // Function to reset the form data and start the process over
  const startOver = () => {
    setFormData({
      name: "",
      costume: "",
      strength: "",
    });
    setFormSubmitted(false);
    setCurrentStep(1);
  };

  // it displays different text depending on the submission status
  return (
    <div className="multistep-form-container">
      {formSubmitted ? (
        <h2>Thanks for sharing your dreams with us!</h2>
      ) : (
        <p>⭐⭐⭐</p>
      )}

      {/* rendering */}
      {
        currentStep === 1 && (
          <Name
            value={formData.name}
            updateFormData={updateFormData}
          />
        )
      }

      {
        currentStep === 2 && (
          <Costume
            value={formData.costume}
            updateFormData={updateFormData}
          />
        )
      }

      {
        !formSubmitted && currentStep === 3 && (
          <SuperheroStrength
            value={formData.strength}
            updateFormData={updateFormData}
          />
        )
      }

      {/* Navigation buttons for moving between steps */}
      {
        !formSubmitted && (
          <div className="nav-buttons">

            {currentStep > 1 && <button aria-label="go to the previous step" className="button" onClick={prevStep}>Back</button>}

            {currentStep < 3 ? (
              <button aria-label="go to the next step" className="button" onClick={nextStep}>Next</button>
            ) : (
              <button aria-label="submit your anwers" className="button" onClick={submitForm}>Submit</button>
            )}
          </div>
        )
      }

      {/* Display the form data after submission */}
      {
        formSubmitted && (
          <div>
            <h3>All Set! Now, Dream of Your Heroic Adventures</h3>
            <p className="text-conclusion">Congratulations, you are officially the superheroe {formData.name} – fully equipped with a {formData.costume} costume, and the {formData.strength} superpower!</p>
            <p className="text-conclusion"> Now close your eyes, drift off, and let the dreams of superpower shenanigans begin. 😴 </p>
            <p>Sweet dreams, hero! 🌟</p>
            <div className="nav-buttons">

              {/* Button to reset the form and start over */}
              <button aria-label="restart the questionaire" className="button" onClick={startOver}>Start Over</button>
            </div>
          </div>
        )
      }
    </div >
  );
};
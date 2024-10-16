import { Name } from "./Q1"

export const Answers = () => {
    const [formData, setFormData] = useState ({
        name:"",
    })
    
      // State to track whether the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);

  

    const handleSubmit = () => {
        setSubmitted(true)
    }

    const handleSignout = () => {
        setSubmitted(false)
    }
  return (
         <div>
           { submitted ? ( 
        <div>
            {/* <button type="button" onClick={handleSignout}>Sign Out</button> 
            Here goes the answers from the form*/}
            <Answers />
            <p>Thank you for your submission!</p>
        </div>) :

        (<div>
            <QuestionOne/>
            <button type="button"onClick={handleSubmit}>Submit</button>
            <p>Please Submit</p>
        </div>)
           }
        </div>
  )
}
}
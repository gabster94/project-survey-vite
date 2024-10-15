import { useState } from "react"
import { Answers } from "./Answers.jsx"
import { QuestionOne } from "./Q1.jsx"

export const Submit = () => {
    const [submitted, setSubmitted] = useState(false)

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


// export const Submit = () => {
//     const [submitted, setSubmitted] = useState(false)

//     const handleSubmit = () => {
//     setSubmitted(true)  
// }

//     const handleNotsubmitted = () => {
//     setSubmitted(false)
// }

//     return (
//         <div>
//             {submitted? (
//                 <div>
//                     <button type="button" onClick={handleNotSubmitted}>Sign Out</button>
//                     <p>Welcome back, good to see you in here</p>
//                 </div>) :
                
//                 (<div>
//                      <button type="button" onClick={handleSubmit}>Submit</button>
//                 </div>) 
//                     }
//                 </div>
//     )
// }


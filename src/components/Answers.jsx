import { QuestionOne } from "./Q1"

export const Answers = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <p>Hallo! The name in Answer is: {name}</p>
            <QuestionOne name={name} setName={setName}/>
            {/* <div>
                <p>The name is: {value} </p>
            </div> */}
        </div>
    )
}
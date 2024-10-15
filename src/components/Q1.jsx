import { useState } from "react";

// QuestionOne Component
export const QuestionOne = ({name, setName}) => {
    // const [name, setName] = useState('');

    return (
        <>
            <form>
                <h1>The state is: {name}</h1>
                <input type="text"
                    onChange={event => setName(event.target.value)}
                    value={name}
                />
            </form>
        </>
    );
};


// import { useState } from "react";

// export const QuestionOne = ({answerone}) => {
//     const [name, setName] = useState('')

//     return (
//         <>
//             <form>
//                 <h1>The state is: {name}</h1>
//                 <input type="text"
//                     onChange={event => setName(event.target.value)}
//                     value={name}
//                 />
//             </form>
//         </>
//     )
// }
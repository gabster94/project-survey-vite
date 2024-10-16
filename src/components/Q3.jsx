const Dropdown = () => {
    const [costume, setCostume] = useState ("");

    return (
        <form>
            <select onChange={event => setCostume(event.target.value)}
                value={costume}
            >
                
                

            </select>
        </form>
    )
}

// What would your superhero costume be made of?
// Glitter and spandex
// Rubber and feathers
// Cardboard and duct tape
import { useState } from "react"
import { Form } from "react-router-dom"

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')

    return (
        <form className="create">
            <h3>Add a New Workout</h3>

            <label>Exercise Title:</label>
            <input 
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <label>Load (in Kg):</label>
            <input 
              type="number"
              onChange={(e) => setLoad(e.target.value)}
              value={load}
            />

            <label>Reps:</label>
            <input 
              type="number"
              onChange={(e) => setReps(e.target.value)}
              value={reps}
            />
        </form>
   )
}

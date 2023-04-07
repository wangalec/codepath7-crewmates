import { useState } from "react"
import { supabase } from "../client";


const CreatePlayer = () => {

    const[player, setPlayer] = useState({name: "", role: "", description: ""});

    const createPlayer = async (event) => {
        event.preventDefault();
        await supabase.from('Players').insert(
            {
                name: player.name, 
                role: player.role, 
                description: player.description
            }).select();
        
            window.location = "/";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("key: ", name, " value: ", value);
        setPlayer( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return(
        <>
            <form>
                <label> Name </label>
                <input type="text" name="name" value={player.name} onChange={handleChange}/>
                <br/>

                <label> Role </label>
                <input type="text" name="role" value={player.role} onChange={handleChange}/>
                <br/>

                <label> Description</label>
                <textarea type="text" name="description" value={player.description} onChange={handleChange}/>
                <br/>

                <button onClick={createPlayer}> Submit </button>
            </form>
        </>
    )
}

export default CreatePlayer
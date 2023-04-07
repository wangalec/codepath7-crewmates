import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { supabase } from "../client"
import PlayerCard from "../components/PlayerCard";


const DisplayPlayers = () => {
    const[players, setPlayers] = useState();

    useEffect(() => {
        fetchPlayers();
    }, [])

    const fetchPlayers = async () => {
        const {data} = await supabase.from('Players').select()
        console.log(data);
        setPlayers(data);
    }

    return(
        <>
            {players &&
            players.map((player) => 
                <>
                    <PlayerCard
                        name={player.name}
                        role={player.role}
                        description={player.description}
                    />
                    <Link to={`/edit/${player.id}`}> Edit Player</Link>
                </>
            )
            }
        </>
    )
}

export default DisplayPlayers
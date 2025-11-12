import { useEffect, useState } from "react"
import { GetMedics } from "../../../requester/Requester"


export function Medics(){

    const [medics, setMedics] = useState({});

    const getMedics = async () => {
        try {
            const response = await GetMedics();
            setMedics(response)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(()=>{
       getMedics();

    }, [])

    

    return(
        <>
        
        </>
    )
}
import React, {useState, useEffect} from "react";
import axios from "axios";
import {BASE_URL} from "../../components/Requests";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToCreateTripPage } from "../../Routes/Coordinator";
import { useHistory } from "react-router-dom";
import {ListTripContainer, Button} from "./styles";
import ListTripCard from "../../cards/ListTripCard/ListTripCard";


const ListTripPage = () => {
    const [trips, setTrips] = useState([])
    const history = useHistory();

    useProtectedPage();

    useEffect (() => {
        axios.get(`${BASE_URL}/trips`)
        .then((response) => {
            setTrips(response.data.trips)
        })
    }, [])

    const tripList = trips.map((trip) => {
            return <div>
                
                <ListTripCard tripId={trip} tripName={trip}/>
            </div>
        })

    return (
        <ListTripContainer>
            <h1>Lista de Viagens</h1>
            
            <div>{tripList}</div>

            <Button onClick={()=>goToCreateTripPage(history)}>CRIAR VIAGEM</Button>
        </ListTripContainer>
    )
}

export default ListTripPage;
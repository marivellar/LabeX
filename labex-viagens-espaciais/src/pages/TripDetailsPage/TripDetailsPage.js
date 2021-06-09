import axios from "axios";
import {React, useEffect, useState } from "react";
import {BASE_URL} from "../../components/Requests";
import {header} from "../../components/Requests";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { TripDetailContainer, TripDetails } from "./styles";


const TripDetailsPage = () => {
    const [tripDetail, setTripDetail] = useState({});
    const param = useParams();

    useProtectedPage()

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get(BASE_URL + `/trip/${param.id}`, header(token))
        .then((response) => {
            setTripDetail(response.data.trip)
            console.log(response.data)
        });
    }, [param.id])
     
    return (
        <TripDetailContainer>
            <h1>Detalhes da viagem</h1>
            
            <TripDetails>
                <p>Data: {tripDetail.date}</p>
                <p>Nome: {tripDetail.name}</p>
                <p>Planeta: {tripDetail.planet}</p>
                <p>Descrição: {tripDetail.description}</p>
                <p>Duração: {tripDetail.durationInDays} dias</p>
            </TripDetails>
        </TripDetailContainer>
    )
}


export default TripDetailsPage;
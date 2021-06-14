import axios from "axios";
import {React, useEffect, useState } from "react";
import {BASE_URL} from "../../components/Requests";
import {header} from "../../components/Requests";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { TripDetailContainer, TripDetails, Detail } from "./styles";


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
                <Detail>Data: {tripDetail.date}</Detail>
                <Detail>Nome: {tripDetail.name}</Detail>
                <Detail>Planeta: {tripDetail.planet}</Detail>
                <Detail>Descrição: {tripDetail.description}</Detail>
                <Detail>Duração: {tripDetail.durationInDays} dias</Detail>
            </TripDetails>
        </TripDetailContainer>
    )
}


export default TripDetailsPage;
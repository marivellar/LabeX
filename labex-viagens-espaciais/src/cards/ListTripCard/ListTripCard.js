import React from "react";
import { useHistory } from "react-router-dom";
import { goToTripDetailsPage} from "../../Routes/Coordinator";
import {TripListContainer, Trip} from "./styles";

const ListTripCard = (props) => {

    const history = useHistory();

    return <TripListContainer>
        <Trip onClick={()=>goToTripDetailsPage(history, props.tripId.id)} key={props.tripId.id}>{props.tripName.name} </Trip>
    </TripListContainer>
}

export default ListTripCard;
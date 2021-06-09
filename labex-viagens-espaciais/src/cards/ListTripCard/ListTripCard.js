import React from "react";
import { useHistory } from "react-router-dom";
import { goToTripDetailsPage} from "../../Routes/Coordinator";

const ListTripCard = (props) => {

    const history = useHistory();

    return <div>
        <li key={props.tripId.id}>{props.tripName.name}</li>
        <button onClick={()=>goToTripDetailsPage(history, props.tripId.id)}>DETALHES DA VIAGEM</button>
    </div>
}

export default ListTripCard;
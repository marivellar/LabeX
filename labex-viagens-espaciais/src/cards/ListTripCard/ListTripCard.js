import React from "react";
import { useHistory } from "react-router-dom";
import { goToTripDetailsPage} from "../../Routes/Coordinator";

const ListTripCard = (props) => {

    const history = useHistory();

    return <div>
        <li onClick={()=>goToTripDetailsPage(history, props.tripId.id)} key={props.tripId.id}>{props.tripName.name}</li>
    </div>
}

export default ListTripCard;
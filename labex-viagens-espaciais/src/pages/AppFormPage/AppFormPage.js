import React, {useState, useEffect} from "react";
import {useForm} from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../components/Requests";
import { AppFormPageContainer, Form, Input, Select, Button } from "./styles";


const AppFormPage = () => {

    const [trips, setTrips] = useState([])

    useEffect (() => {
        axios.get(`${BASE_URL}/trips`)
        .then((response) => {
            setTrips(response.data.trips)
        })
    }, [])

    const [form, onChangeInput] = useForm({
        name: "",
        age: null,
        applicationText: "",
        profession: "",
        country: "",
        trip: null
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
            trip: form.trip
        }

        axios.post(`${BASE_URL}/trips/${form.trip.id}/apply`, body)
        alert("Inscrição realizada!")
    }

    return (
        <AppFormPageContainer>
            <h1>Increva-se em uma viagem</h1>

            <Form onSubmit={onSubmitForm}>
                <Input 
                    value={form["name"]}
                    placeholder={"Nome do candidato(a)"}
                    onChange={onChangeInput}
                    name={"name"}
                    required
                />
                <Input 
                    value={form["age"]}
                    placeholder={"Idade"}
                    onChange={onChangeInput}
                    name={"age"}
                    type={"number"}
                    required
                />
                <Input 
                    value={form["applicationText"]}
                    placeholder={"Informe porque quer se candidatar"}
                    onChange={onChangeInput}
                    name={"applicationText"}
                    required
                />
                <Input 
                    value={form["profession"]}
                    placeholder={"Profissão"}
                    onChange={onChangeInput}
                    name={"profession"}
                    required
                />
                <Input 
                    value={form["country"]}
                    placeholder={"País de origem"}
                    onChange={onChangeInput}
                    name={"country"}
                    required
                />

                <Select
                
                    value={form["trip"]}
                    placeholder={"Escolha uma viagem"}
                    onChange={onChangeInput}
                    name={"trip"}
                    > 
                        {trips.map((trip) => {
                            return <option value={trip}> {trip.name} </option>
                        })}
                        
                </Select>

                <Button>CANDIDATAR</Button>
            </Form>
        </AppFormPageContainer>
    )
}

export default AppFormPage;
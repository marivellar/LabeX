import React, {useState} from "react";
import axios from "axios";
import {BASE_URL} from "../../components/Requests";
import {useForm} from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useHistory } from "react-router";
import {header} from "../../components/Requests";
import {CreateTripContainer, Form, Input, Button} from "./styles"


const CreateTripPage = () => {

    const [form, onChangeInput] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        duration: "",
    })

    useProtectedPage();

    const history = useHistory()

    const onSubmitForm = (event) => {

        event.preventDefault();

        const body={
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            duratioInDays: form.duration
        }

        const token = localStorage.getItem("token");
        
        axios.post(BASE_URL + "/trips", body, header(token), body)
        .then((response) => {
            history.push("/trip-list");
            alert("Viagem criada com sucesso!");
        })
    }


    return (
        <CreateTripContainer>

            <h1>Crie sua viagem</h1>

            <h3>Preencha os campos abaixo para criar uma nova viagem</h3>

            <Form onSubmit={onSubmitForm}>
                <Input 
                    value={form["name"]}
                    placeholder={"Nome"}
                    onChange={onChangeInput}
                    name={"name"}
                    required
                />
                <Input 
                    value={form["planet"]}
                    placeholder={"Planeta"}
                    onChange={onChangeInput}
                    name={"planet"}
                    required
                />
                <Input 
                    value={form["date"]}
                    placeholder={"Data"}
                    onChange={onChangeInput}
                    name={"date"}
                    required
                />
                <Input 
                    value={form["description"]}
                    placeholder={"Descrição"}
                    onChange={onChangeInput}
                    name={"description"}
                    required
                />
                <Input 
                    value={form["duration"]}
                    placeholder={"Duração em dias"}
                    onChange={onChangeInput}
                    name={"duration"}
                    type={"number"}
                    required
                />

                <Button type="submit"> CRIAR </Button>
            </Form>
        </CreateTripContainer>
    )
}

export default CreateTripPage;
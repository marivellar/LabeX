import React from "react";
import styled from "styled-components";

export const CreateTripContainer = styled.div`
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid darkgrey;
    border-radius: 10px;
    
`;

export const Input = styled.input`
    height: 40px;
    text-align: center;
    border: none;
    background-color:whitesmoke;
    padding: 12px 0px;
    text-decoration: none;
    border: 1px solid darkgrey;
    border-radius: 10px;
`;

export const Button = styled.button`
    width:100%;
    height: 40px;
    background-color: purple;
    color: white;
    font-size: 14px;
    border-radius: 10px;
    margin-top: 20px;
`;
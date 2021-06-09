import React from "react";
import styled from "styled-components";

export const LoginPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    height: 40px;
    background-color: whitesmoke;
    border: none;
    padding: 10px 0px;
    text-align: center;
    font-size: 14px;
    text-decoration:underline;
`;

export const Button = styled.button`
    width: 100%;
    height: 36px;
    background-color: purple;
    color: white;
    border-radius: 10px;
`;
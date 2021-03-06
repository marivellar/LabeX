import React from "react";
import styled from "styled-components";

export const AppFormPageContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 80px 0px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  border: solid 1px darkgrey;
  border-radius: 10px;
`;

export const Input = styled.input`
    height: 60px;
    border: none;
    background-color: whitesmoke;
    text-align:center;
    font-size: 14px;
    border: solid 1px darkgrey;
    border-radius: 10px;
`;

export const Select = styled.select`
    width: 100%;
    background-color: whitesmoke;
    height: 40px;
    border-radius: 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: purple;
  color: white;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-top: 20px;
`;
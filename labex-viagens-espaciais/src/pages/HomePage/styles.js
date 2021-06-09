import React from "react";
import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 2fr 2fr;
  grid-template-columns: 2fr 2fr;
`;

export const LogoImg = styled.div`
  width: 100%;
  min-height: 20vh;
  display: grid;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  justify-content: center;
  margin: 80px 0px;
`;

export const AppFormButton = styled.button`
  height: 50px;
  width: 40vw;
  display: grid;
  grid-row: 2 / 3 ;
  grid-column: 1 / 2;
  background-color: whitesmoke;
  color: purple;
  font-size: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  align-items: center;
  justify-self: center;
`;

export const LoginPageButton = styled.button`
  height: 50px;
  width: 40vw;
  display: grid;
  grid-row: 2 / 3 ;
  grid-column: 2 / 3;
  background-color: whitesmoke;
  color: orange;
  font-size: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  align-items: center;
  justify-self: center;
`;
import React from "react";
import styled from "styled-components";

export const TripListContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Trip = styled.div`
  width: 60vw;
  height: 40px;
  text-align: center;
  background-color: whitesmoke;
  border: 1px solid darkgrey;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 5px;
  &:hover {
    background-color: purple;
    color: white;
  }
`;
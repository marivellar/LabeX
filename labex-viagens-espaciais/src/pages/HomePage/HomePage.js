import React from "react";
import {useHistory} from "react-router-dom";
import {goToAppFormPage, goToLoginPage} from "../../Routes/Coordinator";
import logoLabex from "../../img/logo-labex.png";
import {HomeContainer, LogoImg, AppFormButton, LoginPageButton } from "./styles";


const HomePage = () => {
    const history = useHistory();

    return (
        <HomeContainer>

            <LogoImg><img src={logoLabex} alt="Logomarca do labe x" /></LogoImg>

            <AppFormButton onClick={()=>goToAppFormPage(history)}>
                Increver em uma viagem 
            </AppFormButton>
            <LoginPageButton onClick={()=>goToLoginPage(history)}>
                Área do administrador
            </LoginPageButton>
            
        </HomeContainer>
    )
}

export default HomePage;
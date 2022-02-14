import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { irParaFeed } from "../routes/cordinator";


const Header = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 10px;
background-color: #fff;
div{
    display: flex;
    flex-direction: row;
    align-items: center;
}
p{
    font-size: 50px;
    font-family: 'puente-medium-regular';
    color: #ED2590;
    background-color: #fff;
    margin-left: 15px;
}
button{
    border: 1px solid #c5c6ca;
    color: #609abf;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 7px;
    font-size: 14px;
    background: #fff;
    margin-right: 20px;
    :hover{
        background-color: #eff8ff;
    }
}
`

export default function Cabecalho() {
    const [token, setToken] = useState()
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    const deslogar = () => {
        setToken(localStorage.removeItem("token"))
        history.push('/login')
    }
    return (
        <Header>
            <p onClick={()=> irParaFeed(history)}>Labekut</p>
            <div>
                <button onClick={() => voltar()}>voltar</button>
                <button onClick={deslogar}>
                    <b> sair </b>
                </button>
            </div>
        </Header>
    )
}
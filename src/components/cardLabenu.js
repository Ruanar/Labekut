import styled from "styled-components";
import LogoLabenu from '../img/labenu_logo.png';

const CardLab = styled.div`
display: flex;
flex-direction: column;
width: 270px;
justify-content: space-evenly;
align-items: center;
padding: 5px;
background-color: #fff;
border-radius: 6px;
margin-top: 25px;
img{
    height: 150px;
}
button {
    padding: 0 20px;
    height: 25px;
    text-align: center;
    border-radius: 7px;
    font-size: 12px;
    color: #609abf!important;
    border: 1px solid #c5c6ca;
    font-weight: 800;
    margin: 15px auto;
    :hover{
        background-color: #eff8ff;
    }
}
`
const Labenu = styled.p`
color: #337ab7;
font-size: 18px;
margin-bottom: 10px;
`
export default function CardLabenu() {

    return (
        <CardLab>
            <img src={LogoLabenu} alt="Logotipo da Labenu" />
            <Labenu>Labenu</Labenu>
            <p>Patrocinado</p>
            <a href='https://www.labenu.com.br/' target='blank' ><button>participar da comunidade</button> </a>
        </CardLab>
    )
}
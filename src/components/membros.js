import styled from "styled-components";
import CardMembros from "./cardMembros";
import astrodev from '../img/astrodev.jpg';
import hopper from '../img/hopper.jpg';
import jackson from '../img/jackson.jpg';
import johnson from '../img/johnson.jpg';
import lovelace from '../img/lovelace.jpg';
import mk from '../img/mk.jpg';
import turing from '../img/turing.jpg';
import vaughan from '../img/vaughan.jpg';
import bmo from '../img/bmo.png';


const QuadroMembros = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;
    margin: 0 auto;
`
const Membros = styled.p`
    font-weight: 700;
    font-size: 15px;
    letter-spacing: .8px;
    margin: 5px 8px;
    align-self: left;
    span{
        color: #337ab7;
    }
`
const Container = styled.div`
background-color: #fff;
border-radius: 6px;
margin-top: 25px;
width: 281px;
height: 441px;
display: flex;
flex-direction: column;

`
export default function ContainerMembros() {
    return (
        <Container>
            <Membros>membros <span>(104)</span></Membros>
            <QuadroMembros>
                <CardMembros
                    imagem={astrodev}
                    nome='AstroDev'
                />
                <CardMembros
                    imagem={hopper}
                    nome='Grace Hopper'
                />
                <CardMembros
                    imagem={jackson}
                    nome='Mary Jackson'
                />
                <CardMembros
                    imagem={johnson}
                    nome='Katherine Johnson'
                />
                <CardMembros
                    imagem={lovelace}
                    nome='Ada Lovelace'
                />
                <CardMembros
                    imagem={mk}
                    nome='M.K.'
                />
                <CardMembros
                    imagem={bmo}
                    nome='BMO'
                />
                <CardMembros
                    imagem={turing}
                    nome='Alan Turing'
                />
                <CardMembros
                    imagem={vaughan}
                    nome='Dorothy Vaughan'
                />
            </QuadroMembros>
        </Container>
    )
}
import styled from "styled-components"

const FotoMembro = styled.img`
width: 65px;
height: 65px;
object-fit: cover;
margin: 5px auto;
`

const NomeMembro = styled.p`
color: #337ab7;
`

const Cards = styled.div`
    background-color: #f0f0f0;
    width: 87px;
    height: 120px;
    text-align: center;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function CardMembros(props) {
    return (
        <Cards>
            <FotoMembro src={props.imagem} />
            <NomeMembro>{props.nome}</NomeMembro>
        </Cards>
    )
}
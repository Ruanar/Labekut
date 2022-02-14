import styled from "styled-components"
import Carver from '../img/carver.png'

const CardFotoCarver = styled.div`
    padding: 5px;
    width: 130px;
    background-color: #fff;
    display: table-column-group;
    border-radius: 6px;
    justify-content: center;
    align-items: flex-start;
    height: 250px;
    margin-top: 25px;
img{
    width: 100%;
   
}
h4{
    color: #337abe;
    margin-top: 10px;
}
p{
    color: #8c8c8c;
    margin-top: 10px;
}
hr{
    margin-top: 5px;
    color: #d9e6f7;
}
`
export default function FotoCarver() {

    return (
        <CardFotoCarver>

            <img src={Carver} alt="Pintura de George Washington Carver com uma muda de amendoim" />
            <hr />

            <h4>Somos todos Carver</h4>
            <p>(104 membros)</p>

        </CardFotoCarver>

    )
}
import styled from "styled-components";

const ContainerErro = styled.div`
display: flex;
flex-direction: column;
background-color: #fff;
width: 50vw;
padding: 25px;
margin: 25px auto;
justify-content: space-between;
border-radius: 6px 50px 6px 6px;
h3{
    margin: 10px 0;  
}
`
const FaixaInformacoes = styled.div`
background-color: #ddedff;
display: flex;
flex-direction: row;
padding: 8px;
margin: 5px auto;
width: 100%;
span{
    color: #ED2590;
}
`
export default function PaginaDeErro() {


    return (
        <ContainerErro>
            <h2>Opa! Página não encontrada</h2>
            <h3>Mas, já que você está aqui, aí vão algumas informações totalmente aleatórias:</h3>
            <FaixaInformacoes><p>Com uma luminosidade de <span>8,7 milhões de vezes</span> à do Sol, <span>RMC 136a1</span> é a estrela mais luminosa conhecida atualmente.</p></FaixaInformacoes>
            <FaixaInformacoes><p>A fonte tipográfica <span>Times New Roman</span> foi criada em 1932 especialmente para uso do jornal inglês <span>The Times of London</span>.</p></FaixaInformacoes>
            <FaixaInformacoes><p>A <span>chita</span> é o mais rápido de todos os animais terrestres, conseguindo atingir velocidades acima dos 110 km/h.</p></FaixaInformacoes>
            <FaixaInformacoes><p>Uma pessoa que pesa <span>70 quilos</span> na Terra pesaria cerca de <span>2 toneladas</span> no Sol.</p></FaixaInformacoes>
            <FaixaInformacoes><p>A cor da terra é predominantemente <span>marrom</span>. O maior colaborador para que a terra tenha essa cor são as plantas. Quando as plantas morrem, as suas folhas caem no chão, levando o <span>carbono</span> da planta para o solo.</p></FaixaInformacoes>
            <FaixaInformacoes><p>A <span>luz solar</span> demora 8 minutos e 18 segundos para chegar à <span>Terra</span>.</p></FaixaInformacoes>
            <FaixaInformacoes><p>Tanto a <span>Austrália</span> quanto o <span>Brasil</span>, os maiores países do <span>hemisfério sul</span>, possuem o <span>Cruzeiro do Sul</span> em suas respetivas bandeiras nacionais.</p></FaixaInformacoes>
            <FaixaInformacoes><p>O videogame mais jogado em todo o mundo é o jogo de cartas <span>Solitaire</span> do Windows.</p></FaixaInformacoes>
        </ContainerErro>
    )
}
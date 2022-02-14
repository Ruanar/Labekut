import styled from "styled-components"

const ContainerComunidade = styled.div`
display: flex;
flex-direction: column;
background-color: #fff ;
margin-top: 25px;
padding: 10px;
border-radius: 6px 50px 6px 6px;
h2{
    font-size: 25px;
    letter-spacing: .7px;
    font-weight: 500;
}
span{
    color: #337abe;
    }
`
const Pseudolink = styled.p`
color: #666867;
margin-top: 10px;
margin-bottom: 10px;
span{
    color: #337abe;
    }
`
const FaixaEscura = styled.div`
background-color: #ddeefe;
padding: 8px;
display: flex;
flex-direction: row;
gap: 25px;
`

const FaixaClara = styled.div`
background-color: #eff8ff;
padding: 8px;
display: flex;
flex-direction: row;
gap: 25px;
`
const LadoEsquerdo = styled.p`
width: 33%;
color: #666867;
letter-spacing: .8px;
text-align: right;
`
const LadoDireito = styled.p`
width: 67%;
color: #666867;
letter-spacing: .8px;
text-align: left;
`

export default function Comunidade() {
    return (
        <ContainerComunidade>
            <h2>Somos todos Carver</h2>
            <Pseudolink><span>Início</span> &#62; <span>Comunidades</span> &#62; Somos todos Carver</Pseudolink>
            <div>
                <FaixaEscura><LadoEsquerdo>descrição:</LadoEsquerdo><LadoDireito>Comunidade dos estudantes da turma Carver do curso Web Full Stack da Labenu</LadoDireito></FaixaEscura>
                <FaixaClara><LadoEsquerdo>idioma:</LadoEsquerdo><LadoDireito>Português</LadoDireito></FaixaClara>
                <FaixaEscura><LadoEsquerdo>categoria:</LadoEsquerdo><LadoDireito>Alunos e Escolas</LadoDireito></FaixaEscura>
                <FaixaClara><LadoEsquerdo>dono:</LadoEsquerdo><LadoDireito><span>AstroDev</span></LadoDireito></FaixaClara>
                <FaixaEscura><LadoEsquerdo>moderadores:</LadoEsquerdo><LadoDireito>nenhum</LadoDireito></FaixaEscura>
                <FaixaClara><LadoEsquerdo>tipo:</LadoEsquerdo><LadoDireito>pública</LadoDireito></FaixaClara>
                <FaixaEscura><LadoEsquerdo>local:</LadoEsquerdo><LadoDireito>Brasil</LadoDireito></FaixaEscura>
                <FaixaClara><LadoEsquerdo>criada em:</LadoEsquerdo><LadoDireito>27 de Setembro de 2021</LadoDireito></FaixaClara>
                <FaixaEscura><LadoEsquerdo>membros:</LadoEsquerdo><LadoDireito>104</LadoDireito></FaixaEscura>
            </div>
        </ContainerComunidade>
    )
}
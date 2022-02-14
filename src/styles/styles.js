import styled from "styled-components";

export const ContainerPrincipal = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
background-color: #d4dded;
gap: 25px;
`

export const CardPost = styled.div`
display: flex;
flex-direction: column;
padding: 25px;
width: 50vw;
margin: 0 auto;
background-color: rgba(255, 255, 255, 0.5);
box-shadow: 2px 2px 1px grey;
border-radius: 6px;
div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
`

export const Conteudo = styled.p`
max-width: 100%;
min-height: 100px;
margin-top: 25px;
`

export const ListaPosts = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 25px;
width: 50vw;
`

export const CardPostar = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #fff;
align-items: center;
padding: 25px;
width: 50vw;
margin: 25px auto;
border-radius: 6px;
form{
    display: flex;
    gap: 25px;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
    input{
        height: 30px;
        ::-webkit-input-placeholder{
        color: black;
        font-family: Verdana,Arial,sans-serif;
        font-size: 12px;
        }
    }
    textarea{
        height: 100px;
        ::-webkit-input-placeholder{
        color: black;
        font-family: Verdana,Arial,sans-serif;
        font-size: 12px;
        }
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
    margin: 0 auto;
    :hover{
        background-color: #eff8ff;
    }
        }
    }
`
export const ContainerLogin = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 10px;
width: 1000px;
margin: 50px auto;
height: 300px;
`
export const LadoLogin = styled.div`
display: flex;
flex-direction: column;
background-color: #fff;
justify-content: center;
align-items: center;
gap: 10px;
width: 60%;
span{
    color: #ED2590;
}
`
export const CardFormLogin = styled.div`
display: flex;
flex-direction: column;
height: 300px;
gap: 10px;
justify-content: space-between;
`

export const CardLogin = styled.div`
    display: flex;
    flex-direction: column;
    background-color:#e8eefa;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    padding: 25px 0;  
    form{
    margin: 15px auto;
    display: flex;
    gap: 2px;
    flex-direction: column;
    justify-content: center;
    input{
        background-color: white;
    }
    div{
        display: flex;
        flex-direction: row;
        gap: 5px;
        justify-content: space-between;
        margin: 0 20px;
    }
    button{
        width: 125px;
        margin: 15px auto 0 auto;
        color: blue;
        background-color: white;
        :hover{
        background-color: #eff8ff;
    }
    }
}
`

export const IrCadastro = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    background-color:#e8eefa;
    padding: 25px 0;
    align-items: center;
    button{
        width: 125px;
        margin: auto;
        color: blue;
        background-color: white;
        :hover{
        background-color: #eff8ff;
    }
    }
`

export const ContainerCadastro = styled.div`
display: flex;
flex-direction: column;
background-color: #fff;
padding: 10px;
width: 1000px;
margin: 10px auto;
border-radius: 6px;
gap: 5px;
form{
    display: flex;
    flex-direction: column;
    gap: 5px;
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
export const CardCadastro = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`

export const FaixaCadastro = styled.div`
background-color: #ddedff;
display: flex;
flex-direction: row;
padding: 8px;
label{
    margin-right: 10px;
}
`
export const LadoEsquerdo = styled.p`
width: 33%;
color: #666867;
letter-spacing: .8px;
text-align: right;
margin-right: 10px;
`
export const Benvinda = styled.p`
font-size: 24px;
`

export const CardComentario = styled.div`
display: flex;
flex-direction: column;
background-color: #fff;
padding: 25px;
width: 50vw;
margin: 10px auto;
border-radius: 6px;
`
export const NomeVotos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    width: 100%;
`

export const Votos = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const ContainerComentarios = styled.div`
display: flex;
flex-direction: column;
padding: 25px;
`

export const Comentar = styled.form`
display: flex;
flex-direction: column;
gap: 5px;
background-color: #fff;
padding: 25px;
width: 50vw;
margin: 15px auto;
border-radius: 6px;

button {
    padding: 0 20px;
    height: 25px;
    text-align: center;
    border-radius: 7px;
    font-size: 12px;
    color: #609abf!important;
    border: 1px solid #c5c6ca;
    font-weight: 800;
    margin: 0 auto;
    :hover{
        background-color: #eff8ff;
    }
        }
    textarea{
        height: 50px;
        ::-webkit-input-placeholder{
        color: black;
        font-family: Verdana,Arial,sans-serif;
        font-size: 12px;
        }
    }
`
export const Icone = styled.img`
height: 40px;
`



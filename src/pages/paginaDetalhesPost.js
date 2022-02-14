import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAcessoRestrito } from "../hooks/useAcessoRestrito";
import axios from "axios";
import useForm from "../hooks/useForm";
import { url_base } from "../constants/url_base";
import { CardPost, Conteudo, CardComentario, NomeVotos, Votos, Comentar, ContainerComentarios, Icone } from "../styles/styles";
import afirmativo from '../img/afirmativo.png';
import afirmativoAzul from '../img/afirmativoazul.png';
import negativoPreto from '../img/negativo.png';
import negativoVermelho from '../img/negativoverm.png';

export default function PaginaDetalhesPost() {
    useAcessoRestrito()
    const [detalhes, setDetalhes] = useState([])
    const [postagens, setPostagens] = useState([])
    const params = useParams()
    const token = localStorage.getItem("token")
    const pegarComentarios = () => {
        axios.get(`${url_base}/posts/${params.id}/comments`, { headers: { Authorization: token } })
            .then((res) => {
                setDetalhes(res.data)
            })
            .catch((err) => {
                alert(`Que lástima! Não foi possível processar sua solicitação \n ${err.response}`)
            })
    }
    useEffect(() => {
        pegarComentarios()
    }, [])
    const comentarios = detalhes.map((comentario) => {
        const positivo = (id) => {
            const body = { direction: 1 }
            axios.post(`${url_base}/comments/${id}/votes`, body, { headers: { Authorization: token } })
                .then((res) => {

                }).catch((err) => {
                    alert(`Infelizmente, não foi possível registrar seu voto: \n ${err.response}`)
                })
        }
        const negativo = (id) => {
            const body = { direction: -1 }
            axios.put(`${url_base}/comments/${id}/votes`, body, { headers: { Authorization: token } })
                .then((res) => {

                }).catch((err) => {
                    alert(`Infelizmente, não foi possível registrar seu voto: \n ${err.response}`)
                })
        }
        let iconePositivo
        if (comentario.userVote === 1) {
            iconePositivo = afirmativoAzul
        } else {
            iconePositivo = afirmativo
        }


        let iconeNegativo
        if (comentario.userVote === - 1) {
            iconeNegativo = negativoVermelho
        } else {
            iconeNegativo = negativoPreto
        }
        return (
            <CardComentario
                key={comentario.id}
            >
                <NomeVotos>
                    <p><b>{comentario.username}</b></p>
                    <Votos>
                        <Icone src={iconeNegativo} onClick={() => { negativo(comentario.id) }} />
                        <p>  {comentario.voteSum}  </p>
                        <Icone src={iconePositivo} onClick={() => { positivo(comentario.id) }} />
                    </Votos>
                </NomeVotos>
                <Conteudo>{comentario.body}</Conteudo>
            </CardComentario>
        )
    })

    const { form, onChange, limpaCampos } = useForm({
        body: "",
    })

    const criarComentario = () => {
        const body = form
        axios.post(`${url_base}/posts/${params.id}/comments`, body, { headers: { Authorization: token } })
            .then((res) => {
                pegarComentarios()
            })
            .catch((err) => {
                alert(`Sentimos muito, mas tivemos problemas ao processar sua solicitação`)
            })
    }

    const comentar = (event) => {
        event.preventDefault()
        criarComentario()
        limpaCampos()
    }

    const pegarPosts = () => {
        axios.get(`${url_base}/posts`, { headers: { Authorization: token } })
            .then((res) => {
                setPostagens(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    useEffect(() => {
        pegarPosts()
    }, [])
    const infosPost = postagens.filter((post) => {
        return post.id === params.id
    }).map((post) => {
        return (
            <CardPost
                key={post.id}
            >
                <div>
                    <p><i>{post.username}</i> </p>
                    <p><strong>{post.title}</strong></p>
                </div>
                <Conteudo>{post.body} </Conteudo>

            </CardPost>
        )
    })

    return (
        <ContainerComentarios>
            {infosPost}
            <Comentar onSubmit={comentar} >
                <textarea
                    placeholder="Comente o que você acha disto."
                    value={form.body}
                    name="body"
                    onChange={onChange}
                    required
                />
                <button>comentar</button>
            </Comentar>
            {comentarios}
        </ContainerComentarios>
    )
}
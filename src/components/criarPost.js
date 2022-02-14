import axios from "axios";
import { url_base } from "../constants/url_base";
import useForm from "../hooks/useForm";
import { CardPostar } from "../styles/styles";

export default function CriarPost() {
    const { form, onChange, limpaCampos } = useForm({
        title: "",
        body: "",
    })
    const criarPostagem = () => {
        const body = form
        const token = localStorage.getItem("token")
        axios.post(`${url_base}/posts`, body, { headers: { Authorization: token } })
            .then((res) => {
            })
            .catch((err) => {
                alert(`Infelizmente, ocorreu um erro ao processar a sua solicitação: ${err.response}`)
            })
    }
    const postar = (event) => {
        event.preventDefault()
        criarPostagem()
        limpaCampos()
    }
    return (
        <CardPostar>
            <form onSubmit={postar}>
                <input
                    placeholder="Título da Postagem"
                    value={form.title}
                    name="title"
                    onChange={onChange}
                    required
                />
                <textarea
                    placeholder="Diga o que você está pensando."
                    value={form.body}
                    name="body"
                    onChange={onChange}
                    required
                />
                <button>publicar</button>
            </form>
        </CardPostar>
    )
}
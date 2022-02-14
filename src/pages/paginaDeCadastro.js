import axios from "axios";
import { useHistory } from "react-router-dom";
import { url_base } from "../constants/url_base";
import useForm from "../hooks/useForm";
import { irParaFeed } from "../routes/cordinator";
import { paises } from "../constants/paises";
import { FaixaCadastro, ContainerCadastro, CardCadastro, LadoEsquerdo, Benvinda } from "../styles/styles";

export default function PaginaDeCadastro() {
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }
    const { form, onChange, limpaCampos } = useForm({
        username: "",
        email: "",
        password: "",
    })
    const fazerCadastro = () => {
        const headers = 'Content-Type: application/json'
        const body = form
        axios.post(`${url_base}/users/signup`, body, headers)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                irParaFeed(history)
            }).catch((err) => {
                console.log('Deu errado: ', err.response)
            })
    }
    const cadastrar = (event) => {
        event.preventDefault()
        fazerCadastro(form)
        limpaCampos()
    }
    return (
        <ContainerCadastro>
            <Benvinda>bem-vinda(o) ao Labekut!</Benvinda>
            <p>Só precisamos confirmar algumas coisas antes de você começar a usar o Labekut:</p>
            <CardCadastro>
                <form onSubmit={cadastrar}>
                    <FaixaCadastro> <LadoEsquerdo>e-mail:</LadoEsquerdo>
                        <input

                            name="email"
                            type={'email'}
                            value={form.email}
                            onChange={onChange}
                            required
                        />
                    </FaixaCadastro>
                    <FaixaCadastro> <LadoEsquerdo>senha:</LadoEsquerdo>
                        <input
                            name="password"
                            type={'password'}
                            value={form.password}
                            onChange={onChange}
                            required
                            pattern={"^.{8,30}$"}
                            title={"Sua senha deve ter entre 8 e 30 caracteres"}
                        />
                    </FaixaCadastro>
                    <FaixaCadastro><LadoEsquerdo>nome de usuário:</LadoEsquerdo>
                        <input
                            name="username"
                            value={form.username}
                            onChange={onChange}
                            required
                        />
                    </FaixaCadastro>
                </form>
                <FaixaCadastro><LadoEsquerdo>desculpe se estamos sendo indiscretos, mas qual a sua idade?</LadoEsquerdo>
                    <input
                        required
                        type={"number"}
                        min={18}
                    />
                </FaixaCadastro>
                <FaixaCadastro>
                    <LadoEsquerdo>sexo:</LadoEsquerdo>
                    <label
                        required
                    >
                        <input type="radio" />
                        feminino
                    </label>
                    <label >
                        <input type="radio" />
                        masculino
                    </label>
                    <label >
                        <input type="radio" />
                        prefiro não informar
                    </label>
                </FaixaCadastro>
                <FaixaCadastro>
                    <LadoEsquerdo>país:</LadoEsquerdo>
                    <select
                        name={"pais"}
                        required
                    >
                        <option value={""} selected disabled>Escolha um País</option>
                        {paises.map((pais) => {
                            return <option value={pais} key={pais}>{pais}</option>
                        })}
                    </select>
                </FaixaCadastro>
            </CardCadastro>
            <div>
                <button type="button" onClick={() => voltar()}>voltar</button>
                <button type="submit" onClick={cadastrar}>tudo certo, pode criar minha conta</button>
            </div>
        </ContainerCadastro>
    )
}

import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { irParaCadastro, irParaFeed } from "../routes/cordinator";
import axios from 'axios';
import { url_base } from "../constants/url_base";
import { CardFormLogin, CardLogin, ContainerLogin, IrCadastro, LadoLogin } from "../styles/styles";

export default function PaginaDeLogin() {
    const history = useHistory()
    const { form, onChange, limpaCampos } = useForm({
        email: "",
        password: "",
    })

    const fazerLogin = (event) => {
        const headers = 'Content-Type: application/json'
        const body = form
        event.preventDefault()
        axios.post(`${url_base}/users/login`, body, headers)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                limpaCampos()
                irParaFeed(history)
            }).catch((err) => {
                alert(`Infelizmente, não conseguimos concluir a sua solicitação`)
            })
    }

    return (
        <ContainerLogin>
            <LadoLogin>
                <p><span><b>Conecte-se</b></span> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
                <p><span><b>Conheça </b></span>novas pessoas através de amigos de seus amigos e comunidades</p>
                <p><span><b>Compartilhe</b></span> seus vídeos, fotos e paixôes em um só lugar</p>
            </LadoLogin>
            <CardFormLogin>
                <CardLogin>
                    <p>Acesse o <b>Labekut</b> com a sua conta</p>
                    <form onSubmit={fazerLogin}>
                        <div> E-mail:
                            <input
                                placeholder="e-mail"
                                name="email"
                                type={'email'}
                                value={form.email}
                                onChange={onChange}
                                required
                            /></div>
                        <div>Senha:
                            <input
                                placeholder="senha"
                                type={'password'}
                                name="password"
                                value={form.password}
                                onChange={onChange}
                                required
                                pattern={"^.{8,30}$"}
                                title={"Sua senha deve ter entre 8 e 30 caracteres"}
                            /> </div>

                        <button><b>LOGIN</b></button>
                    </form>
                </CardLogin>
                <IrCadastro>
                    <p>Ainda não é membro?</p>
                    <button onClick={() => irParaCadastro(history)}><b>CADASTRE-SE</b></button>
                </IrCadastro>
            </CardFormLogin>
        </ContainerLogin>
    )
}
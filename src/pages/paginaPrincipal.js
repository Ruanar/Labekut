import CardLabenu from "../components/cardLabenu";
import Comunidade from "../components/comunidade";
import CriarPost from "../components/criarPost";
import FotoCarver from "../components/fotoCarver";
import ContainerMembros from "../components/membros";
import Postagens from "../components/Postagens";
import { useAcessoRestrito } from "../hooks/useAcessoRestrito";
import { ContainerPrincipal } from "../styles/styles";

export default function PaginaPrincipal() {
    useAcessoRestrito()

    return (
        <ContainerPrincipal>
            <FotoCarver />
            <div>
                <Comunidade />
                <CriarPost />
                <Postagens />
            </div>
            <div>
                <CardLabenu />
                <ContainerMembros />
            </div>
        </ContainerPrincipal>
    )
}
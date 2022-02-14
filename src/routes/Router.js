import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cabecalho from '../components/header';
import PaginaDeCadastro from '../pages/paginaDeCadastro';
import PaginaDeErro from '../pages/paginaDeErro';
import PaginaDeLogin from '../pages/PaginaDeLogin';
import PaginaDetalhesPost from '../pages/paginaDetalhesPost';
import PaginaPrincipal from '../pages/paginaPrincipal';
import GlobalStyle from '../styles/globalStyle';

export const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Cabecalho />
            <Switch>
                <Route exact path={'/login'}>
                    <PaginaDeLogin />
                </Route>
                <Route exact path={'/cadastro'}>
                    <PaginaDeCadastro />
                </Route>
                <Route exact path={'/'}>
                    <PaginaPrincipal />
                </Route>
                <Route exact path={'/post/:id'}>
                    <PaginaDetalhesPost />
                </Route>
                <Route>
                    <PaginaDeErro />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import DashBoard from '../pages/DashBoard/index';
import sign from '../pages/SignIn/index';
import Painel from '../pages/Cadastros/Painel/index';
import FromaPagamento from '../pages/Cadastros/Forma de Pagamento/cadastro_formapagamento';
// Switch vai garantir que apenas uma rota seja visivel
// //<Route path="/" exact component={Produtos} />
const Routes: React.FC = () => (
    <BrowserRouter>
        <Route path="/" exact component={DashBoard} />
        <Route path="/cadastro" exact component={Painel} />
        <Route path="/formapagamento" exact component={FromaPagamento} />


    </BrowserRouter>
);

export default Routes;
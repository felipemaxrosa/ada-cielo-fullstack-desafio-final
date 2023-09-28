import { Routes as BrowserRoutes, Route } from 'react-router-dom';

import { APP_ROUTES } from '../constants';
import { Home } from '../pages/home';
import { PessoaFisica } from '../pages/pessoa-fisica';
import { PessoaJuridica } from '../pages/pessoa-juridica';

export function Routes() {
  return (
    <BrowserRoutes>
      <Route path={APP_ROUTES.HOME} element={<Home />}></Route>
      <Route path={APP_ROUTES.PESSOA_FISICA} element={<PessoaFisica />}></Route>
      <Route
        path={APP_ROUTES.PESSOA_JURIDICA}
        element={<PessoaJuridica />}
      ></Route>
    </BrowserRoutes>
  );
}

import { Routes as BrowserRoutes, Route } from 'react-router-dom';

import { APP_ROUTES } from '../constants';
import { Home } from '../pages/home';
import { Prospect } from '../pages/prospect';

export function Routes() {
  return (
    <BrowserRoutes>
      <Route path={APP_ROUTES.HOME} element={<Home />}></Route>
      <Route path={APP_ROUTES.PROSPECT} element={<Prospect />}></Route>
    </BrowserRoutes>
  );
}

import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Routes } from '../../routes';
import { FeedbackForm } from '../forms';
import { TableData } from '../tables/prospects-pessoa-fisica-table/models';
import { AppContainer } from './app.styles';
import { APP_ROUTES } from '../../constants';

export function App() {
  return (
    <Router>
      <AppContainer>
        <nav>
          <ul>
            <li>
              <Link to={APP_ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link to={APP_ROUTES.PROSPECT}>Prospect</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes />
        </main>
      </AppContainer>
    </Router>
  );
}

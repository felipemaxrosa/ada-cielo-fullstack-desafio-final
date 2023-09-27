import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Routes } from '../../routes';
import { FeedbackForm } from '../forms';
import { TableData } from '../tables/feedbacks-table/models';
import { AppContainer } from './app.styles';
import { APP_ROUTES } from '../../constants';

export function App() {
  function createData(type: string, message: string): TableData {
    return {
      type,
      message,
    };
  }

  const mockedTableRows = [
    createData('Elogio', 'Este eh um feedback de Elogio 1'),
    createData('Elogio', 'Este eh um feedback de Elogio 2'),
    createData('Elogio', 'Este eh um feedback de Elogio 3'),
    createData('Elogio', 'Este eh um feedback de Elogio 4'),
    createData('Elogio', 'Este eh um feedback de Elogio 5'),
    createData('Critica', 'Este eh um feedback de Critica 1'),
    createData('Critica', 'Este eh um feedback de Critica 2'),
    createData('Critica', 'Este eh um feedback de Critica 3'),
    createData('Critica', 'Este eh um feedback de Critica 4'),
    createData('Critica', 'Este eh um feedback de Critica 5'),
    createData('Sugestão', 'Este eh um feedback de Sugestão 1'),
    createData('Sugestão', 'Este eh um feedback de Sugestão 2'),
    createData('Sugestão', 'Este eh um feedback de Sugestão 3'),
    createData('Sugestão', 'Este eh um feedback de Sugestão 4'),
    createData('Sugestão', 'Este eh um feedback de Sugestão 5'),
  ];

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
        <Routes />
      </AppContainer>
    </Router>
  );
}

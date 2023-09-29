import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@mui/material';

import { Routes } from '../../routes';
import { Toolbar } from '../toolbar/toolbar';
import { SuccessModal } from '../form/modals/success-modal/success-modal';

export function App() {
  return (
    <Router>
      <Container disableGutters>
        <Toolbar />
        <main>
          <Routes />
        </main>

        <SuccessModal />
      </Container>
    </Router>
  );
}

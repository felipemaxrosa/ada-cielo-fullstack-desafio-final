import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@mui/material';

import { Routes } from '../../routes';
import { Toolbar } from '../toolbar/toolbar';

export function App() {
  return (
    <Router>
      <Container disableGutters>
        <Toolbar />
        <main>
          <Routes />
        </main>
      </Container>
    </Router>
  );
}

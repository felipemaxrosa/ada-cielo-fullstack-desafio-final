import styled from 'styled-components';

import { devices } from '../../styles/constants/breakpoints';

export const AppContainer = styled.main`
  display: flex;
  gap: 40px;

  flex-direction: column;
  padding: 16px;

  @media ${devices.lg} {
    flex-direction: row;
  }
  /* flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px; */
`;

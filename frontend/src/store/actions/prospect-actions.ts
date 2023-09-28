import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { pessoaFisicaProspectService } from '../../services';
import { PessoaFisicaProspect } from '../../models/interfaces';

const BOOTSTRAP = 'PROSPECT/BOOTSTRAP';

export const bootstrap = createAsyncThunk<{ fisica: PessoaFisicaProspect[] }>(
  BOOTSTRAP,
  async () => {
    const { data: pessoaFisicaProspects } =
      await pessoaFisicaProspectService.getAllProspects();

    return {
      fisica: pessoaFisicaProspects,
    };
  }
);

import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { pessoaFisicaProspectService } from '../../services';
import { PessoaFisicaProspect } from '../../models/interfaces';

const BOOTSTRAP = 'PROSPECT/LOADING';

export const bootstrap = createAsyncThunk<PessoaFisicaProspect[]>(
  BOOTSTRAP,
  async () => {
    const { data: prospects } =
      await pessoaFisicaProspectService.getAllProspects();

    return prospects;
  }
);

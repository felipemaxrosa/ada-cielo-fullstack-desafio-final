import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { pessoaFisicaProspectService } from '../../services';
import {
  PessoaFisicaProspect,
  PessoaFisicaProspectErrors,
  ProspectType,
} from '../../models/interfaces';

const BOOTSTRAP = 'PROSPECT/BOOTSTRAP';
const SET_PROSPECT_TYPE = 'PROSPECT/SET_PROSPECT_TYPE';

const SET_PESSOA_FISICA_PROSPECT = 'PROSPECT/SET_PESSOA_FISICA_PROSPECT';
const SET_PESSOA_FISICA_PROSPECT_ERRORS =
  'PROSPECT/SET_PESSOA_FISICA_PROSPECT_ERRORS';
const CLEAR_PESSOA_FISICA_PROSPECT = 'PROSPECT/CLEAR_PESSOA_FISICA_PROSPECT';
const CLEAR_PESSOA_FISICA_PROSPECT_ERRORS =
  'PROSPECT/CLEAR_PESSOA_FISICA_PROSPECT_ERRORS';

/**
 * GENERAL ACTIONS
 */

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
export const setProspectType = createAction<ProspectType>(SET_PROSPECT_TYPE);

/**
 * PESSOA FISICA PROSPECT
 */
export const setPessoaFisicaProspect = createAction<PessoaFisicaProspect>(
  SET_PESSOA_FISICA_PROSPECT
);
export const setPessoaFisicaProspectErrors =
  createAction<PessoaFisicaProspectErrors>(SET_PESSOA_FISICA_PROSPECT_ERRORS);
export const clearPessoaFisicaProspect = createAction(
  CLEAR_PESSOA_FISICA_PROSPECT
);
export const clearPessoaFisicaProspectErrors = createAction(
  CLEAR_PESSOA_FISICA_PROSPECT_ERRORS
);

/**
 * PESSOA JURIDICA PROSPECT
 */

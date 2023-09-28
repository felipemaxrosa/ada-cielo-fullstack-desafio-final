import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import {
  pessoaFisicaProspectService,
  pessoaJuridicaProspectService,
} from '../../services';
import {
  PessoaFisicaProspect,
  PessoaFisicaProspectErrors,
  PessoaFisicaProspectKeys,
  PessoaJuridicaProspect,
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
const PESSOA_FISICA_ON_CHANGE = 'PESSOA_FISICA_ON_CHANGE';

const SET_PESSOA_JURIDICA_PROSPECT = 'PROSPECT/SET_PESSOA_JURIDICA_PROSPECT';
const SET_PESSOA_JURIDICA_PROSPECT_ERRORS =
  'PROSPECT/SET_PESSOA_JURIDICA_PROSPECT_ERRORS';
const CLEAR_PESSOA_JURIDICA_PROSPECT =
  'PROSPECT/CLEAR_PESSOA_JURIDICA_PROSPECT';
const CLEAR_PESSOA_JURIDICA_PROSPECT_ERRORS =
  'PROSPECT/CLEAR_PESSOA_JURIDICA_PROSPECT_ERRORS';
const PESSOA_JURIDICA_ON_CHANGE = 'PESSOA_JURIDICA_ON_CHANGE';

/**
 * GENERAL ACTIONS
 */

export const bootstrap = createAsyncThunk<{
  fisica: PessoaFisicaProspect[];
  juridica: PessoaJuridicaProspect[];
}>(BOOTSTRAP, async () => {
  const { data: pessoaFisicaProspects } =
    await pessoaFisicaProspectService.getAllProspects();
  const { data: pessoaJuridicaProspects } =
    await pessoaJuridicaProspectService.getAllProspects();

  return {
    fisica: pessoaFisicaProspects,
    juridica: pessoaJuridicaProspects,
  };
});
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
type OnChangePessoaFisicaProspect = {
  name: PessoaFisicaProspectKeys;
  value: string;
};
export const onChangePessoaFisicaProspect =
  createAction<OnChangePessoaFisicaProspect>(PESSOA_FISICA_ON_CHANGE);

/**
 * PESSOA JURIDICA PROSPECT
 */
export const setPessoaJuridicaProspect = createAction<PessoaJuridicaProspect>(
  SET_PESSOA_JURIDICA_PROSPECT
);
export const setPessoaJuridicaProspectErrors =
  createAction<PessoaFisicaProspectErrors>(SET_PESSOA_JURIDICA_PROSPECT_ERRORS);
export const clearPessoaJuridicaProspect = createAction(
  CLEAR_PESSOA_JURIDICA_PROSPECT
);
export const clearPessoaJuridicaProspectErrors = createAction(
  CLEAR_PESSOA_JURIDICA_PROSPECT_ERRORS
);

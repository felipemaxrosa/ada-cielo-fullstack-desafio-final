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
import { AxiosError } from 'axios';

const BOOTSTRAP = 'PROSPECT/BOOTSTRAP';
const SET_PROSPECT_TYPE = 'PROSPECT/SET_PROSPECT_TYPE';

const SET_PESSOA_FISICA_PROSPECT = 'PROSPECT/SET_PESSOA_FISICA_PROSPECT';
const SET_PESSOA_FISICA_PROSPECT_ERRORS =
  'PROSPECT/SET_PESSOA_FISICA_PROSPECT_ERRORS';
const CLEAR_PESSOA_FISICA_PROSPECT = 'PROSPECT/CLEAR_PESSOA_FISICA_PROSPECT';
const CLEAR_PESSOA_FISICA_PROSPECT_ERRORS =
  'PROSPECT/CLEAR_PESSOA_FISICA_PROSPECT_ERRORS';
const ON_CHANGE_PESSOA_FISICA_PROSPECT =
  'PROSPECT/ON_CHANGE_PESSOA_FISICA_PROSPECT';
const SAVE_PESSOA_FISICA_PROSPECT = 'PROSPECT/SAVE_PESSOA_FISICA_PROSPECT';

const SET_PESSOA_JURIDICA_PROSPECT = 'PROSPECT/SET_PESSOA_JURIDICA_PROSPECT';
const SET_PESSOA_JURIDICA_PROSPECT_ERRORS =
  'PROSPECT/SET_PESSOA_JURIDICA_PROSPECT_ERRORS';
const CLEAR_PESSOA_JURIDICA_PROSPECT =
  'PROSPECT/CLEAR_PESSOA_JURIDICA_PROSPECT';
const CLEAR_PESSOA_JURIDICA_PROSPECT_ERRORS =
  'PROSPECT/CLEAR_PESSOA_JURIDICA_PROSPECT_ERRORS';
const ON_CHANGE_PESSOA_JURIDICA_PROSPECT =
  'PROSPECT/ON_CHANGE_PESSOA_JURIDICA_PROSPECT';

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
  createAction<OnChangePessoaFisicaProspect>(ON_CHANGE_PESSOA_FISICA_PROSPECT);
export const savePessoaFisicaProspect = createAsyncThunk<
  { errors: PessoaFisicaProspectErrors } | void,
  PessoaFisicaProspect
>(
  SAVE_PESSOA_FISICA_PROSPECT,
  async (values): Promise<{ errors: PessoaFisicaProspectErrors } | void> => {
    if (values.id) {
      try {
        await pessoaFisicaProspectService.updateProspect(values);
      } catch (error) {
        const handledErrors = (error as AxiosError)?.response
          ?.data as PessoaFisicaProspectErrors;

        return Promise.reject(JSON.stringify(handledErrors));
      }
    } else {
      try {
        await pessoaFisicaProspectService.addProspect(values);
      } catch (error) {
        const handledErrors = (error as AxiosError)?.response
          ?.data as PessoaFisicaProspectErrors;

        return Promise.reject(JSON.stringify(handledErrors));
      }
    }
  }
);

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

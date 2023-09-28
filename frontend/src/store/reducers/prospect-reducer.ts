import { createReducer } from '@reduxjs/toolkit';

import { prospectActions } from '../actions';
import { PessoaFisicaProspect } from '../../models/interfaces';

export type ProspectType = 'FISICA' | 'JURIDICA';
export interface ProspectReducerState {
  loading: boolean;
  submitting: boolean;
  prospects: {
    fisica: PessoaFisicaProspect[];
    juridica: any[];
  };
  type: ProspectType;
  fisica: {
    data: PessoaFisicaProspect | null;
    errors: Record<keyof PessoaFisicaProspect, string> | null;
  };
  juridica: {
    data: unknown;
    errors: Record<string, string> | null;
  };
  selectedProspect: unknown;
}

export const prospectReducerInitialState: ProspectReducerState = {
  loading: false,
  prospects: {
    fisica: [],
    juridica: [],
  },
  fisica: {
    data: null,
    errors: null,
  },
  juridica: {
    data: null,
    errors: null,
  },
  type: 'FISICA',
  selectedProspect: undefined,
  submitting: false,
};

export const prospectReducer = createReducer(
  prospectReducerInitialState,
  (designer) => {
    designer
      .addCase(prospectActions.bootstrap.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(prospectActions.bootstrap.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        prospects: {
          ...state.prospects,
          fisica: payload.fisica,
        },
      }));
  }
);

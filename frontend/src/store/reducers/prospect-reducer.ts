import { createReducer } from '@reduxjs/toolkit';

import { prospectActions } from '../actions';
import {
  PessoaFisicaProspect,
  PessoaFisicaProspectErrors,
  ProspectType,
} from '../../models/interfaces';

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
    errors: PessoaFisicaProspectErrors | null;
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

    designer.addCase(prospectActions.clearPessoaFisicaProspect, (state) => ({
      ...state,
      fisica: {
        ...state.fisica,
        data: null,
      },
    }));

    designer.addCase(
      prospectActions.clearPessoaFisicaProspectErrors,
      (state) => ({
        ...state,
        fisica: {
          ...state.fisica,
          errors: null,
        },
      })
    );

    designer.addCase(
      prospectActions.setPessoaFisicaProspect,
      (state, { payload }) => ({
        ...state,
        fisica: {
          ...state.fisica,
          data: payload,
        },
      })
    );

    designer.addCase(
      prospectActions.setPessoaFisicaProspectErrors,
      (state, { payload }) => ({
        ...state,
        fisica: {
          ...state.fisica,
          errors: payload,
        },
      })
    );

    designer.addCase(prospectActions.setProspectType, (state, { payload }) => ({
      ...state,
      type: payload,
    }));
  }
);

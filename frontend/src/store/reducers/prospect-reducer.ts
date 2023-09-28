import { createReducer } from '@reduxjs/toolkit';

import { prospectActions } from '../actions';
import { PessoaFisicaProspect } from '../../models/interfaces';

export interface ProspectReducerState {
  loading: boolean;
  submitting: boolean;
  prospects: {
    fisica: PessoaFisicaProspect[];
  };
  selectedProspect: unknown;
}

export const prospectReducerInitialState: ProspectReducerState = {
  loading: false,
  prospects: {
    fisica: [],
  },
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

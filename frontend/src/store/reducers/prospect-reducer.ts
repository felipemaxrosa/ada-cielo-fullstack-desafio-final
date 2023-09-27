import { createReducer } from '@reduxjs/toolkit';

import { prospectActions } from '../actions';

export interface ProspectReducerState {
  loading: boolean;
  submitting: boolean;
  prospects: unknown;
  selectedProspect: unknown;
}

export const prospectReducerInitialState: ProspectReducerState = {
  loading: false,
  prospects: [],
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
        prospects: payload,
      }));
  }
);

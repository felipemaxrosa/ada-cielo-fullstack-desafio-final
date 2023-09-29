import { createReducer } from '@reduxjs/toolkit';

import {
  PessoaFisicaProspect,
  PessoaFisicaProspectErrors,
  PessoaJuridicaProspect,
  PessoaJuridicaProspectErrors,
  ProspectType,
} from '../../models/interfaces';
import { prospectActions } from '../actions';

export interface ProspectReducerState {
  fisica: {
    data?: PessoaFisicaProspect;
    errors: PessoaFisicaProspectErrors | null;
  };
  juridica: {
    data: PessoaJuridicaProspect | null;
    errors: PessoaJuridicaProspectErrors | null;
  };
  loading: boolean;
  prospects: {
    fisica: PessoaFisicaProspect[];
    juridica: PessoaJuridicaProspect[];
  };
  showSuccessModal: boolean;
  submitting: boolean;
  type: ProspectType;
}

export const prospectReducerInitialState: ProspectReducerState = {
  loading: false,
  prospects: {
    fisica: [],
    juridica: [],
  },
  fisica: {
    data: undefined,
    errors: null,
  },
  juridica: {
    data: null,
    errors: null,
  },
  type: 'FISICA',
  submitting: false,
  showSuccessModal: false,
};

export const prospectReducer = createReducer(
  prospectReducerInitialState,
  (designer) => {
    /**
     * BOOTSTRAP
     */
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
          juridica: payload.juridica,
        },
      }));

    designer.addCase(prospectActions.setProspectType, (state, { payload }) => ({
      ...state,
      type: payload,
    }));

    designer.addCase(
      prospectActions.showSuccessModal,
      (state, { payload }) => ({
        ...state,
        showSuccessModal: payload,
      })
    );

    /**
     * PESSOA FISICA PROSPECT
     */
    designer.addCase(prospectActions.clearPessoaFisicaProspect, (state) => ({
      ...state,
      fisica: {
        ...state.fisica,
        data: undefined,
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

    designer.addCase(
      prospectActions.onChangePessoaFisicaProspect,
      (state, { payload }) => {
        const newData = { ...state.fisica.data, [payload.name]: payload.value };

        state.fisica.data = newData as PessoaFisicaProspect;
      }
    );

    designer
      .addCase(prospectActions.savePessoaFisicaProspect.pending, (state) => ({
        ...state,
        submitting: true,
      }))
      .addCase(prospectActions.savePessoaFisicaProspect.fulfilled, (state) => ({
        ...state,
        submitting: false,
        showSuccessModal: true,
        fisica: {
          errors: null,
        },
      }))
      .addCase(
        prospectActions.savePessoaFisicaProspect.rejected,
        (state, { error }) => {
          if (error.message) {
            const errors = JSON.parse(
              error?.message
            ) as PessoaFisicaProspectErrors;

            state.fisica.errors = errors;
          }
        }
      );

    /**
     * PESSOA JURIDICA PROSPECT
     */
    designer.addCase(prospectActions.clearPessoaJuridicaProspect, (state) => ({
      ...state,
      juridica: {
        ...state.juridica,
        data: null,
      },
    }));

    designer.addCase(
      prospectActions.clearPessoaJuridicaProspectErrors,
      (state) => ({
        ...state,
        juridica: {
          ...state.juridica,
          errors: null,
        },
      })
    );

    designer.addCase(
      prospectActions.setPessoaJuridicaProspect,
      (state, { payload }) => ({
        ...state,
        juridica: {
          ...state.juridica,
          data: payload,
        },
      })
    );

    designer.addCase(
      prospectActions.setPessoaJuridicaProspectErrors,
      (state, { payload }) => ({
        ...state,
        juridica: {
          ...state.juridica,
          errors: payload,
        },
      })
    );
  }
);

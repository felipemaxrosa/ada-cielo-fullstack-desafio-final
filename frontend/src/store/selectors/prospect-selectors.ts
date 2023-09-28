import { RootState } from '..';

export const selectProspectType = (state: RootState) => state.prospect.type;

export const selectProspectPessoaFisica = (state: RootState) =>
  state.prospect.fisica.data;
export const selectProspectPessoaFisicaErrors = (state: RootState) =>
  state.prospect.fisica.errors;
export const selectProspectPessoaFisicaList = (state: RootState) =>
  state.prospect.prospects.fisica;

export const selectProspectPessoaJuridica = (state: RootState) =>
  state.prospect.juridica.data;
export const selectProspectPessoaJuridicaErrors = (state: RootState) =>
  state.prospect.juridica.errors;
export const selectProspectPessoaJuridicaList = (state: RootState) =>
  state.prospect.prospects.juridica;

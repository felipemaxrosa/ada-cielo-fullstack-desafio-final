import { RootState } from '..';

export const selectProspectType = (state: RootState) => state.prospect.type;
export const selectIsSubmitting = (state: RootState) =>
  state.prospect.submitting;
export const selectShowSuccessModal = (state: RootState) =>
  state.prospect.showSuccessModal;
export const selectIsLoading = (state: RootState) => state.prospect.loading;
export const selectAlertMessage = (state: RootState) =>
  state.prospect.alertMessage;
export const selectShowAlertModal = (state: RootState) =>
  state.prospect.showAlertModal;

export const selectPessoaFisicaProspect = (state: RootState) =>
  state.prospect.fisica.data;
export const selectPessoaFisicaProspectErrors = (state: RootState) =>
  state.prospect.fisica.errors;
export const selectPessoaFisicaProspectList = (state: RootState) =>
  state.prospect.prospects.fisica;
export const hasPessoaFisicaProspectErrors = (state: RootState) =>
  state.prospect.fisica.errors !== null &&
  Object.keys(state.prospect.fisica.errors).length > 0;

export const selectPessoaJuridicaProspect = (state: RootState) =>
  state.prospect.juridica.data;
export const selectPessoaJuridicaProspectErrors = (state: RootState) =>
  state.prospect.juridica.errors;
export const selectPessoaJuridicaProspectList = (state: RootState) =>
  state.prospect.prospects.juridica;
export const hasPessoaJuridicaProspectErrors = (state: RootState) =>
  state.prospect.juridica.errors !== null &&
  Object.keys(state.prospect.juridica.errors).length > 0;

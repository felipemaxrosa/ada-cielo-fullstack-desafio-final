import { RootState } from '..';

export const selectProspectsPessoaFisica = (state: RootState) =>
  state.prospect.prospects.fisica;

import { PessoaJuridicaProspect } from '../../../../models/interfaces';

export interface TableHeadCell {
  disablePadding: boolean;
  id: keyof PessoaJuridicaProspect;
  label: string;
  numeric: boolean;
}

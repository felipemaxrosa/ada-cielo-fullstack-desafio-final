import { PessoaFisicaProspect } from '../../../../models/interfaces';

export interface TableHeadCell {
  disablePadding: boolean;
  id: keyof PessoaFisicaProspect;
  label: string;
  numeric: boolean;
}

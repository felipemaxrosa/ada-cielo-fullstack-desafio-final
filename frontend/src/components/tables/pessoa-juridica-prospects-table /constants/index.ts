import { TableHeadCell } from '../models';

export const tableHeads: TableHeadCell[] = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: '#ID',
  },
  {
    id: 'cnpj',
    numeric: false,
    disablePadding: false,
    label: 'CNPJ',
  },
  {
    id: 'corporateName',
    numeric: false,
    disablePadding: false,
    label: 'Razao Social',
  },
  {
    id: 'mcc',
    numeric: false,
    disablePadding: false,
    label: 'MCC',
  },
  {
    id: 'contactCpf',
    numeric: false,
    disablePadding: false,
    label: 'CPF do contato',
  },
  {
    id: 'contactName',
    numeric: false,
    disablePadding: false,
    label: 'Nome do contato',
  },
  {
    id: 'contactEmail',
    numeric: false,
    disablePadding: false,
    label: 'Email do contato',
  },
];

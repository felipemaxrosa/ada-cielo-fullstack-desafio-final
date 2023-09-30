import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import {
  SortOrder,
  PessoaJuridicaProspectKeys,
} from '../../../models/interfaces';
import { TableHeadCell } from './models';

interface PessoaJuridicaProspectsTableHeadProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: PessoaJuridicaProspectKeys
  ) => void;
  order: SortOrder;
  orderBy: string;
  heads: TableHeadCell[];
}

export function PessoaJuridicaProspectsTableHead(
  props: PessoaJuridicaProspectsTableHeadProps
) {
  const { order, orderBy, onRequestSort, heads } = props;
  const createSortHandler =
    (property: PessoaJuridicaProspectKeys) =>
    (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {heads.map((content) => {
          const sortDirection = orderBy === content.id ? order : false;
          const sortLabelDirection = orderBy === content.id ? order : 'asc';
          const orderLabel =
            order === 'desc' ? 'sorted descending' : 'sorted ascending';

          return (
            <TableCell
              key={content.id}
              align="left"
              padding="normal"
              sortDirection={sortDirection}
            >
              <TableSortLabel
                active={orderBy === content.id}
                direction={sortLabelDirection}
                onClick={createSortHandler(content.id)}
              >
                {content.label}
                {orderBy === content.id && (
                  <Box component="span" sx={visuallyHidden}>
                    {orderLabel}
                  </Box>
                )}
              </TableSortLabel>
            </TableCell>
          );
        })}
        <TableCell align="right"></TableCell>
      </TableRow>
    </TableHead>
  );
}

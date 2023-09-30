import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { SortOrder, PessoaFisicaProspect } from '../../../models/interfaces';
import { TableHeadCell } from './models';

interface FeedbackTableHeadProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof PessoaFisicaProspect
  ) => void;
  order: SortOrder;
  orderBy: string;
  heads: TableHeadCell[];
}

export function ProspectsPessoaFisicaTableHead(props: FeedbackTableHeadProps) {
  const { order, orderBy, onRequestSort, heads } = props;
  const createSortHandler =
    (property: keyof PessoaFisicaProspect) =>
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
        <TableCell align="right" padding="normal"></TableCell>
      </TableRow>
    </TableHead>
  );
}

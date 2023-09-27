import { FC, useMemo, useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Paper,
} from '@mui/material';

import { SortOrder } from '../../../models/interfaces';
import { getComparator, stableSort } from '../../../utils';
import { FeedbacksTableContainer } from './feedbacks-table.styles';
import { FeedbacksTableToolbar } from './feedbacks-table-toolbar';
import { TableData, TableHeadCell } from './models';
import { FeedbackTableHead } from './feedbacks-table-head';

const tableHeads: TableHeadCell[] = [
  {
    id: 'type',
    numeric: false,
    disablePadding: false,
    label: 'Tipo de Feedback',
  },

  {
    id: 'message',
    numeric: false,
    disablePadding: false,
    label: 'Mensagem',
  },
];

interface FeedbacksTableProps {
  tableRows: TableData[];
}

export const FeedbacksTable: FC<FeedbacksTableProps> = ({ tableRows }) => {
  const [order, setOrder] = useState<SortOrder>('asc');
  const [orderBy, setOrderBy] = useState<keyof TableData>('type');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (property: keyof TableData) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableRows.length) : 0;

  const sortedRows = useMemo(
    () =>
      stableSort(tableRows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, tableRows]
  );

  return (
    <FeedbacksTableContainer>
      <Paper>
        <FeedbacksTableToolbar />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <FeedbackTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={(_, property) => handleRequestSort(property)}
              heads={tableHeads}
            />
            <TableBody>
              {sortedRows.map((row, index) => {
                const rowKey = `feedback-${row.type}-${row.message}`;

                return (
                  <TableRow hover key={rowKey}>
                    <TableCell align="left">{row.type}</TableCell>
                    <TableCell align="left">{row.message}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} align="left" />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, page) => handleChangePage(page)}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </FeedbacksTableContainer>
  );
};

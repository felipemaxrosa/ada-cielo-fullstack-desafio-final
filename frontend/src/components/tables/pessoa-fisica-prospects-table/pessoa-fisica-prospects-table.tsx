import { FC, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { PessoaFisicaProspect, SortOrder } from '../../../models/interfaces';
import { getComparator, stableSort } from '../../../utils';
import { PessoaFisicaProspectsTableToolbar } from './pessoa-fisica-prospects-table-toolbar';
import { ProspectsPessoaFisicaTableHead } from './pessoa-fisica-prospects-table-head';
import { tableHeads } from './constants';
import { useAppDispatch } from '../../../store';
import {
  deletePessoaFisicaProspect,
  setPessoaFisicaProspect,
} from '../../../store/actions/prospect-actions';
import { APP_ROUTES } from '../../../constants';

interface PessoaFisicaProspectsTableProps {
  tableRows: PessoaFisicaProspect[];
}

export const PessoaFisicaProspectsTable: FC<
  PessoaFisicaProspectsTableProps
> = ({ tableRows }) => {
  const [order, setOrder] = useState<SortOrder>('asc');
  const [orderBy, setOrderBy] = useState<keyof PessoaFisicaProspect>('id');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRequestSort = (property: keyof PessoaFisicaProspect) => {
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

  const handleEditClick = (prospect: PessoaFisicaProspect) => {
    dispatch(setPessoaFisicaProspect(prospect));
    navigate(APP_ROUTES.PESSOA_FISICA);
  };

  const handleDeleteClick = (id: number) => {
    dispatch(deletePessoaFisicaProspect(id));
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
    <Paper>
      <PessoaFisicaProspectsTableToolbar />
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size="medium"
        >
          <ProspectsPessoaFisicaTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={(_, property) => handleRequestSort(property)}
            heads={tableHeads}
          />
          <TableBody>
            {sortedRows.map((row) => {
              return (
                <TableRow hover key={row.id}>
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.contactName}</TableCell>
                  <TableCell align="left">{row.cpf}</TableCell>
                  <TableCell align="left">{row.mcc}</TableCell>
                  <TableCell align="left">{row.contactEmail}</TableCell>
                  <TableCell align="right" padding="normal">
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="flex-end"
                      gap={1}
                    >
                      <Tooltip title="Editar Prospect">
                        <IconButton
                          aria-label="edit"
                          onClick={() => handleEditClick(row)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Deletar Prospect">
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleDeleteClick(row.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={5} align="left" />
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
  );
};

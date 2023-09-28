import React from 'react';
import { Container, Grid, Paper } from '@mui/material';

import { Input } from '../../form/input';
import { useAppDispatch, useAppSelector } from '../../../store';
import { selectPessoaFisicaProspect } from '../../../store/selectors';
import { PessoaFisicaProspectKeys } from '../../../models/interfaces';
import { onChangePessoaFisicaProspect } from '../../../store/actions/prospect-actions';

export const PessoaFisicaProspectForm = () => {
  const state = useAppSelector(selectPessoaFisicaProspect);
  const dispatch = useAppDispatch();

  const isEditing = true;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = event.target.name as PessoaFisicaProspectKeys;

    dispatch(onChangePessoaFisicaProspect({ name, value }));
  };

  return (
    <Paper>
      <Container sx={{ padding: '32px 16px' }}>
        <h1>Pessoa Fisica</h1>
        <form>
          <Grid container mb={2}>
            <Grid item xs={6} sm={2}>
              <Input
                size="small"
                disabled={isEditing}
                label="ID"
                name="id"
                value={state?.id}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Input
                name="cpf"
                size="small"
                label="CPF"
                value={state?.cpf}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Input
                name="mcc"
                size="small"
                label="MCC"
                value={state?.mcc}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                name="contactName"
                size="small"
                label="Nome do contato"
                value={state?.contactName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                name="contactEmail"
                size="small"
                label="Email do contato"
                value={state?.contactEmail}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </form>
      </Container>
    </Paper>
  );
};

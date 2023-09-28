import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import { Input } from '../../form/input';
import { useAppSelector } from '../../../store';
import { selectPessoaFisicaProspect } from '../../../store/selectors';

export const PessoaFisicaProspectForm = () => {
  const isEditing = true;
  const state = useAppSelector(selectPessoaFisicaProspect);

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
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Input name="cpf" size="small" label="CPF" value={state?.cpf} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Input name="mcc" size="small" label="MCC" value={state?.mcc} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                name="contactName"
                size="small"
                label="Nome do contato"
                value={state?.contactName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                name="contactEmail"
                size="small"
                label="Email do contato"
                value={state?.contactEmail}
              />
            </Grid>
          </Grid>
        </form>
      </Container>
    </Paper>
  );
};

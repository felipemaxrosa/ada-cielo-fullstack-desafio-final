import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Input } from '../../form/input';
import { useAppDispatch, useAppSelector } from '../../../store';
import {
  selectIsSubmitting,
  selectPessoaFisicaProspect,
  selectPessoaFisicaProspectErrors,
} from '../../../store/selectors';
import { PessoaFisicaProspectKeys } from '../../../models/interfaces';
import {
  clearPessoaFisicaProspect,
  clearPessoaFisicaProspectErrors,
  onChangePessoaFisicaProspect,
  savePessoaFisicaProspect,
} from '../../../store/actions/prospect-actions';
import { Button } from '../../form/button';
import { APP_ROUTES } from '../../../constants';

export const PessoaFisicaProspectForm = () => {
  const state = useAppSelector(selectPessoaFisicaProspect);
  const errors = useAppSelector(selectPessoaFisicaProspectErrors);
  const isSubmitting = useAppSelector(selectIsSubmitting);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = event.target.name as PessoaFisicaProspectKeys;

    console.log({ value, name });

    dispatch(onChangePessoaFisicaProspect({ name, value }));
  };

  const handleCancelButtonClick = () => {
    dispatch(clearPessoaFisicaProspect());
    dispatch(clearPessoaFisicaProspectErrors());
    navigate(APP_ROUTES.HOME);
  };

  const handleSaveButtonClick = () => {
    if (state) {
      dispatch(savePessoaFisicaProspect(state));
    }
  };

  return (
    <Paper>
      <Container sx={{ padding: '32px 16px' }}>
        <h1>Pessoa Fisica</h1>
        <form>
          <Grid container mb={2} spacing={2}>
            <Grid item xs={6} sm={2}>
              <Input
                sx={{ background: '#F4F4F4' }}
                disabled
                size="small"
                label="ID"
                name="id"
                value={state?.id}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} mb={4}>
            <Grid item xs={6} sm={3}>
              <Input
                error={!!errors?.cpf}
                helperText={errors?.cpf}
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
                error={Boolean(errors?.mcc)}
                helperText={errors?.mcc}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                name="contactName"
                size="small"
                label="Nome do contato"
                value={state?.contactName}
                onChange={handleInputChange}
                error={Boolean(errors?.contactName)}
                helperText={errors?.contactName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                name="contactEmail"
                size="small"
                label="Email do contato"
                value={state?.contactEmail}
                onChange={handleInputChange}
                error={Boolean(errors?.contactEmail)}
                helperText={errors?.contactEmail}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} direction="row-reverse">
            <Grid item xs={6} md={2}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleSaveButtonClick}
                disabled={isSubmitting}
              >
                Salvar
              </Button>
            </Grid>
            <Grid item xs={6} md={2}>
              <Button
                fullWidth
                onClick={handleCancelButtonClick}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Paper>
  );
};

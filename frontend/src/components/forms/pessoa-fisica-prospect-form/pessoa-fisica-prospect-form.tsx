import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Input } from '../../form/input';
import { useAppDispatch, useAppSelector } from '../../../store';
import { selectPessoaFisicaProspect } from '../../../store/selectors';
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isEditing = true;

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
          <Grid container spacing={2} mb={4}>
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

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button fullWidth onClick={handleCancelButtonClick}>
                Cancelar
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleSaveButtonClick}
              >
                Salvar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Paper>
  );
};

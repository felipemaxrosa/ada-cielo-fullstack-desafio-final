import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Input } from '../../form/input';
import { useAppDispatch, useAppSelector } from '../../../store';
import {
  selectIsSubmitting,
  selectPessoaJuridicaProspect,
  selectPessoaJuridicaProspectErrors,
} from '../../../store/selectors';
import { PessoaJuridicaProspectKeys } from '../../../models/interfaces';
import {
  clearPessoaJuridicaProspect,
  clearPessoaJuridicaProspectErrors,
  onChangePessoaJuridicaProspect,
  savePessoaJuridicaProspect,
} from '../../../store/actions/prospect-actions';
import { Button } from '../../form/button';
import { APP_ROUTES } from '../../../constants';

export const PessoaJuridicaProspectForm = () => {
  const state = useAppSelector(selectPessoaJuridicaProspect);
  const errors = useAppSelector(selectPessoaJuridicaProspectErrors);
  const isSubmitting = useAppSelector(selectIsSubmitting);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log({ state });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    onlyNumbers?: boolean
  ) => {
    const { value } = event.target;
    const name = event.target.name as PessoaJuridicaProspectKeys;
    const regex = /^[0-9\b]+$/;

    console.log({ name, value });

    if (onlyNumbers) {
      if (value === '' || regex.test(value)) {
        dispatch(onChangePessoaJuridicaProspect({ name, value }));
      } else {
        event.stopPropagation();
      }
    } else {
      dispatch(onChangePessoaJuridicaProspect({ name, value }));
    }
  };

  const handleCancelButtonClick = () => {
    dispatch(clearPessoaJuridicaProspect());
    dispatch(clearPessoaJuridicaProspectErrors());
    navigate(APP_ROUTES.HOME);
  };

  const handleSaveButtonClick = () => {
    if (state) {
      dispatch(savePessoaJuridicaProspect(state));
    }
  };

  return (
    <Paper>
      <Container sx={{ padding: '32px 16px' }}>
        <h1>Pessoa Juridica</h1>
        <form>
          <Grid container mb={2} spacing={2}>
            <Grid item xs={6} sm={2}>
              <Input
                sx={{ background: '#F4F4F4' }}
                disabled
                size="small"
                label="ID"
                name="id"
                value={state?.id ? state?.id : ''}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} mb={4}>
            <Grid item xs={6} sm={3}>
              <Input
                error={!!errors?.cnpj}
                helperText={errors?.cnpj}
                name="cnpj"
                size="small"
                label="CNPJ"
                value={state?.cnpj}
                onChange={(e) => handleInputChange(e, true)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                name="corporateName"
                size="small"
                label="Corporate Name"
                value={state?.corporateName}
                onChange={handleInputChange}
                error={Boolean(errors?.corporateName)}
                helperText={errors?.corporateName}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Input
                name="mcc"
                size="small"
                label="MCC"
                value={state?.mcc}
                onChange={(e) => handleInputChange(e, true)}
                error={Boolean(errors?.mcc)}
                helperText={errors?.mcc}
                // inputProps={{ maxLength: 4 }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Input
                name="contactCpf"
                size="small"
                label="CPF do contato"
                value={state?.contactCpf}
                onChange={handleInputChange}
                error={Boolean(errors?.contactCpf)}
                helperText={errors?.contactCpf}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
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
            <Grid item xs={12} sm={9} md={6}>
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

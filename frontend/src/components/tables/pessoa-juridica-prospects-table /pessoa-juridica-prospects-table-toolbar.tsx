import { Button, Grid, Toolbar, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useAppDispatch } from '../../../store';
import { APP_ROUTES } from '../../../constants';
import { pessoaJuridicaProspectService } from '../../../services';
import {
  setAlertMessage,
  setPessoaJuridicaProspect,
  showAlertModal,
} from '../../../store/actions/prospect-actions';

export function PessoaJuridicaProspectsTableToolbar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const getNextPessoaJuridicaProspect = async () => {
    try {
      const { data } = await pessoaJuridicaProspectService.getNextProspect();
      if (typeof data === 'object') {
        dispatch(setPessoaJuridicaProspect(data));
        navigate(APP_ROUTES.PESSOA_JURIDICA);
      } else {
        dispatch(setAlertMessage(data));
        dispatch(showAlertModal(true));
      }
    } catch (error) {
      const handledError = (error as AxiosError)?.response?.data as string;
      dispatch(setAlertMessage(handledError));
      dispatch(showAlertModal(true));
    }
  };

  const handleNextProspectButtonClick = async () => {
    await getNextPessoaJuridicaProspect();
  };

  const toolbarSx: SxProps<Theme> = {
    pl: { sm: 2 },
    pr: { xs: 1, sm: 1 },
  };

  return (
    <Toolbar sx={toolbarSx}>
      <Grid container justifyContent="space-between">
        <Typography variant="h6" component="div">
          Pessoa Juridica
        </Typography>

        <Button variant="contained" onClick={handleNextProspectButtonClick}>
          NEXT PROSPECT
        </Button>
      </Grid>
    </Toolbar>
  );
}

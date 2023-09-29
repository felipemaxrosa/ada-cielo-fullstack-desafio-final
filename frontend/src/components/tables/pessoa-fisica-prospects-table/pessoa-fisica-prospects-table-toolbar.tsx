import { Toolbar, Typography, Button, Grid } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { APP_ROUTES } from '../../../constants';
import { useAppDispatch } from '../../../store';
import {
  setAlertMessage,
  setPessoaFisicaProspect,
  showAlertModal,
} from '../../../store/actions/prospect-actions';
import { pessoaFisicaProspectService } from '../../../services';

export function PessoaFisicaProspectsTableToolbar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const getNextPessoaFisicaProspect = async () => {
    try {
      const { data } = await pessoaFisicaProspectService.getNextProspect();
      if (typeof data === 'object') {
        dispatch(setPessoaFisicaProspect(data));
        navigate(APP_ROUTES.PESSOA_FISICA);
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
    await getNextPessoaFisicaProspect();
  };

  const toolbarSx: SxProps<Theme> = {
    pl: { sm: 2 },
    pr: { xs: 1, sm: 1 },
  };

  return (
    <Toolbar sx={toolbarSx}>
      <Grid container justifyContent="space-between">
        <Typography variant="h6" component="div">
          Pessoa Fisica
        </Typography>

        <Button variant="contained" onClick={handleNextProspectButtonClick}>
          NEXT PROSPECT
        </Button>
      </Grid>
    </Toolbar>
  );
}

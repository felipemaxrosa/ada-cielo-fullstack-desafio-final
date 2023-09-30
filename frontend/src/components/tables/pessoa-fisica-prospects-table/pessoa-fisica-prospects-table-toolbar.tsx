import {
  Toolbar,
  Typography,
  Button,
  Grid,
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import AddIcon from '@mui/icons-material/Add';
import NextIcon from '@mui/icons-material/NavigateNext';

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

  const handleNewProspectButtonClick = () => {
    navigate(APP_ROUTES.PESSOA_FISICA);
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

        <Box display="flex" gap={1}>
          {/* <Tooltip title="Novo Prospect">
            <IconButton>
              <AddIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Proximo Prospect">
            <IconButton>
              <NextIcon />
            </IconButton>
          </Tooltip> */}
          <Button variant="outlined" onClick={handleNewProspectButtonClick}>
            Novo
          </Button>
          <Button variant="outlined" onClick={handleNextProspectButtonClick}>
            Proximo
          </Button>
        </Box>
      </Grid>
    </Toolbar>
  );
}

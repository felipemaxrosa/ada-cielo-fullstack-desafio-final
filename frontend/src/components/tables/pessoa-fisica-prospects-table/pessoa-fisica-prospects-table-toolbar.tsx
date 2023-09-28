import { Toolbar, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

export function PessoaFisicaProspectsTableToolbar() {
  const toolbarSx: SxProps<Theme> = {
    pl: { sm: 2 },
    pr: { xs: 1, sm: 1 },
  };

  return (
    <Toolbar sx={toolbarSx}>
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Pessoa Fisica
      </Typography>
    </Toolbar>
  );
}

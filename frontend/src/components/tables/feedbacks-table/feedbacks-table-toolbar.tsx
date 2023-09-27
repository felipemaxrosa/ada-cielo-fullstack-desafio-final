import { Toolbar, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

export function FeedbacksTableToolbar() {
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
        Feedbacks
      </Typography>
    </Toolbar>
  );
}

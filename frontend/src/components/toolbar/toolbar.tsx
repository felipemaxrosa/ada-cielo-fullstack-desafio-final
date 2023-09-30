import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MuiToolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

export function Toolbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <MuiToolbar disableGutters>
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h1"
              noWrap
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 400,
                fontSize: 20,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CIELO PROSPECTS
            </Typography>
            <Avatar>A</Avatar>
          </Box>
        </MuiToolbar>
      </Container>
    </AppBar>
  );
}

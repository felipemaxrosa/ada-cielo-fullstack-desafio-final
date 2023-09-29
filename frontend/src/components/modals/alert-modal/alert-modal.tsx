import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {
  selectShowAlertModal,
  selectAlertMessage,
} from '../../../store/selectors';
import { useAppDispatch, useAppSelector } from '../../../store';
import { clearAlert } from '../../../store/actions/prospect-actions';

interface AlertModalProps {
  title?: string;
}
export const AlertModal: React.FC<AlertModalProps> = ({ title }) => {
  const open = useAppSelector(selectShowAlertModal);
  const message = useAppSelector(selectAlertMessage);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(clearAlert());
  };

  return (
    <Dialog id="success-modal" open={open} maxWidth="md">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ padding: '32px 24px' }}>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: 2 }}>
        <Button onClick={handleClose} variant="contained">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

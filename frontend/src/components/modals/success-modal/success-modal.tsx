import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { APP_ROUTES } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../store';
import {
  bootstrap,
  showSuccessModal,
} from '../../../store/actions/prospect-actions';
import { selectShowSuccessModal } from '../../../store/selectors';

interface SuccessModalProps {
  title?: string;
}
export const SuccessModal: React.FC<SuccessModalProps> = ({ title }) => {
  const open = useAppSelector(selectShowSuccessModal);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(bootstrap());
    dispatch(showSuccessModal(false));
    navigate(APP_ROUTES.HOME);
  };

  return (
    <Dialog id="success-modal" open={open} maxWidth="md">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ padding: '32px 24px' }}>
        <DialogContentText>
          Prospect has been processed successfully!
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: 2 }}>
        <Button onClick={handleClose} variant="contained">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

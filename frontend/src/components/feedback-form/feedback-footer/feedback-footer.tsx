import Stack from '@mui/material/Stack';

import { Button } from '../../form';
import { useFeedback } from '../../../hooks';

export const FeedbackFooter = () => {
  const { submitFeedback, loading, state } = useFeedback();
  const hasEmptyField = state.message.length === 0 || state.type.length === 0;
  const buttonSubmitDisabled = loading || hasEmptyField;

  return (
    <footer>
      <Stack mt={6}>
        <Button
          variant="contained"
          size="large"
          onClick={submitFeedback}
          disabled={buttonSubmitDisabled}
        >
          Enviar
        </Button>
      </Stack>
    </footer>
  );
};

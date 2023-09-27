import { SelectChangeEvent } from '@mui/material/Select';

import { SelectField, Form, Input } from '../../form';
import { FEEDBACK_TYPE_OPTIONS } from '../../constants';
import { useFeedbackContext } from '../../../contexts/feedback-context';

export const FeedbackBody = () => {
  const {
    dispatch,
    state: { message: feedbackMessage, type: feedbackType },
  } = useFeedbackContext();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    dispatch({ type: 'ONCHANGE', payload: { name, value } });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({ type: 'ONCHANGE', payload: { name, value } });
  };

  return (
    <Form>
      <SelectField
        items={FEEDBACK_TYPE_OPTIONS}
        value={feedbackType}
        onChange={handleChange}
        label="Que tipo de feedback que voce gostaria de nos deixar?"
        name="type"
      />
      <Input
        multiline
        rows={6}
        name="message"
        value={feedbackMessage}
        label="Deixe seu feedback aqui:"
        onChange={handleInputChange}
      />
    </Form>
  );
};

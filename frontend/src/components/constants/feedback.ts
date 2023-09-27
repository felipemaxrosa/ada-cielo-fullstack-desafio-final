import { FeedbackType, FeedbackTypeOption } from '../../models/interfaces';

export const FEEDBACK_TYPE_OPTIONS: FeedbackTypeOption[] = [
  {
    label: 'Crítica',
    value: FeedbackType.CRITICA,
  },
  {
    label: 'Elogio',
    value: FeedbackType.ELOGIO,
  },
  {
    label: 'Sugestão',
    value: FeedbackType.SUGESTAO,
  },
];

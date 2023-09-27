export enum FeedbackType {
  CRITICA = 'CRITICA',
  ELOGIO = 'ELOGIO',
  SUGESTAO = 'SUGESTAO',
}
export interface Feedback {
  id: string;
  message: string;
  type: string;
  status: string;
}

export interface FeedbackTypeOption {
  label: string;
  value: FeedbackType;
}

export interface FeedbackData {
  message: string;
  type: string;
}

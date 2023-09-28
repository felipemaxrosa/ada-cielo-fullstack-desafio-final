import { Feedback } from '../../../../models/interfaces';

export type TableData = Pick<Feedback, 'type' | 'message'>;

export interface TableHeadCell {
  disablePadding: boolean;
  id: keyof TableData;
  label: string;
  numeric: boolean;
}

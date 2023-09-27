import api from './api';
import { URL } from './constants';
import { Feedback, FeedbackData } from '../models/interfaces';

function submitFeedback(feedbackData: FeedbackData) {
  return api.post<Feedback[]>(URL.FEEDBACK, feedbackData);
}

export { submitFeedback };

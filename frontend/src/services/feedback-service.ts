import api from './api';
import { SERVICES_URL } from './constants';
import { Feedback, FeedbackData } from '../models/interfaces';

function submitFeedback(feedbackData: FeedbackData) {
  return api.post<Feedback[]>(SERVICES_URL.FEEDBACK, feedbackData);
}

export { submitFeedback };

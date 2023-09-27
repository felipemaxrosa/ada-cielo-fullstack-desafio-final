import { useReducer } from 'react';

type OnChangeAction = {
  type: 'ONCHANGE';
  payload: { name: string; value: string };
};
type SetLoading = { type: 'SET_LOADING'; payload: boolean };
type SetError = { type: 'SET_ERROR'; payload: string };
export type FeedbackAction = OnChangeAction | SetLoading | SetError;

export interface FeedbackState {
  type: string;
  message: string;
  loading: boolean;
  error: string;
}

const initialState: FeedbackState = {
  message: '',
  type: '',
  loading: false,
  error: '',
};

function reducer(state: FeedbackState, action: FeedbackAction) {
  switch (action.type) {
    case 'ONCHANGE': {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    case 'SET_LOADING': {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case 'SET_ERROR': {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export function useFeedbackReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
}

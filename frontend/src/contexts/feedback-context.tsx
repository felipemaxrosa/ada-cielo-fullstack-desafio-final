import { createContext, useContext, ReactNode } from "react";

import { feedbackReducer } from "./reducers";

interface IFeedbackProviderProps {
  children: ReactNode;
}

interface IFeedbackContextData {
  state: feedbackReducer.FeedbackState;
  dispatch: React.Dispatch<feedbackReducer.FeedbackAction>;
}

export const FeedbackContext = createContext<IFeedbackContextData>(
  {} as IFeedbackContextData
);

export function FeedbackProvider({ children }: IFeedbackProviderProps) {
  const { state, dispatch } = feedbackReducer.useFeedbackReducer();

  const contextValues = {
    state,
    dispatch,
  };

  return (
    <FeedbackContext.Provider value={contextValues}>
      {children}
    </FeedbackContext.Provider>
  );
}

export const useFeedbackContext = () => useContext(FeedbackContext);

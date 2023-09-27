import { FeedbackProvider } from "../../contexts/feedback-context";
import { FeedbackContainer } from "./feedback-container";
import { FeedbackHeader } from "./feedback-header";
import { FeedbackBody } from "./feedback-body";
import { FeedbackFooter } from "./feedback-footer";
import { Divisor } from "../shared";

export const FeedbackForm = () => {
  return (
    <FeedbackProvider>
      <FeedbackContainer>
        <FeedbackHeader />
        <Divisor />
        <FeedbackBody />
        <FeedbackFooter />
      </FeedbackContainer>
    </FeedbackProvider>
  );
};

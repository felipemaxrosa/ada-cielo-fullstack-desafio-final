import { PropsWithChildren, FC } from "react";
import { Container } from "./feedback-container.styles";

export const FeedbackContainer: FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

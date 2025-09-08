import { FC, ReactNode } from "react";
import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import Toast from "./Toast";
import { ToastContainerProps, ToastTypes } from "./types";

const TOP_POSITION = 25;

interface Toast {
  id: string;
  type: ToastTypes;
  title: string;
  description?: ReactNode;
}

const ToastContainer: FC<ToastContainerProps> = ({
  toasts,
  onRemove,
  ttl = 6000,
  stackingSpacing = TOP_POSITION + 75,
}) => {
  return (
    <StyledToastContainer
      className="absolute top-0 right-0 toast"
      style={{ zIndex: "100" }}
    >
      <TransitionGroup>
        {toasts.map((toast, index) => {
          const top = TOP_POSITION + index * stackingSpacing;
          return (
            <Toast
              key={index}
              toast={toast}
              onRemove={onRemove}
              ttl={ttl}
              style={{ top: `${top}px`, zIndex: "50" }}
            />
          );
        })}
      </TransitionGroup>
    </StyledToastContainer>
  );
};

const StyledToastContainer = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
`;
export default ToastContainer;

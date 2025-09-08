"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { Alert } from "./Alert";
import { ToastProps, types } from "./types";

export const alertVariants = {
  INFO: "info",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning",
  PENDING: "pending",
} as const;

const alertTypeMap = {
  [types.INFO]: alertVariants.INFO,
  [types.SUCCESS]: alertVariants.SUCCESS,
  [types.DANGER]: alertVariants.DANGER,
  [types.WARNING]: alertVariants.WARNING,
  [types.PENDING]: alertVariants.PENDING,
};

const StyledToast = styled.div`
  right: 16px;
  position: fixed;
  max-width: calc(100% - 32px);
  transition: all 250ms ease-in;
  width: 100%;
  max-width: 400px;
  z-index: 1000;
`;

const Toast: React.FC<ToastProps> = ({
  toast,
  onRemove,
  style,
  ttl,
  ...props
}) => {
  const timer = useRef<number>();
  const ref = useRef(null);
  const removeHandler = useRef(onRemove);
  const { id, title, description, type } = toast;

  const handleRemove = useCallback(
    () => removeHandler.current(id),
    [id, removeHandler]
  );

  const handleMouseEnter = () => {
    clearTimeout(timer.current);
  };

  const handleMouseLeave = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      if (toast.type === types.PENDING) return;
      handleRemove();
    }, ttl);
  };

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      if (toast.type === types.PENDING) return;
      handleRemove();
    }, ttl);

    return () => {
      clearTimeout(timer.current);
    };
  }, [timer, ttl, handleRemove, toast.type]);

  return (
    <CSSTransition nodeRef={ref} timeout={250} style={style} {...props}>
      <StyledToast
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Alert
          title={title}
          variant={alertTypeMap[type]}
          onClick={handleRemove}
        >
          {description}
        </Alert>
      </StyledToast>
    </CSSTransition>
  );
};

export default Toast;

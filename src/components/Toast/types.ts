import { ReactNode } from "react";

export interface ToastContainerProps {
  toasts: Toast[];
  stackingSpacing?: number;
  ttl?: number;
  onRemove: (id: string) => void;
}
export interface ToastProps {
  toast: Toast;
  onRemove: ToastContainerProps["onRemove"];
  ttl: number;
  style: Partial<CSSStyleDeclaration>;
}

export const types = {
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
  PENDING: "pending",
};

export const toastTypes = {
  INFO: "info",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning",
  PENDING: "pending",
};
export type ToastTypes = typeof toastTypes[keyof typeof toastTypes];

export interface AlertProps {
  variant: ToastTypes;
  title: string;
  children: ReactNode;
  onClick: () => void;
}

export interface Toast {
  id: string;
  type: ToastTypes;
  title: string;
  description?: ReactNode;
}

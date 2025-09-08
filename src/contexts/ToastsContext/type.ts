import { Toast } from "components/Toast";
import { ReactNode } from "react";

export type ToastSignature = (
  title: string,
  description?: ReactNode,
  txHash?: string
) => void;

export interface ToastContextApi {
  toasts: Toast[];
  clear: () => void;
  remove: (id: string) => void;
  toastError: ToastSignature;
  toastInfo: ToastSignature;
  toastSuccess: ToastSignature;
  toastWarning: ToastSignature;
  toastPending: ToastSignature;
}

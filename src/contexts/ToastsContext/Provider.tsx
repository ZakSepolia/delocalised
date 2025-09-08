"use client";

import { createContext, ReactElement, useCallback, useState } from "react";
import { ToastContextApi } from "./type";
import { Toast, toastTypes } from "components/Toast";

export const ToastsContext = createContext<ToastContextApi | null>(null);

export const ToastsProvider = ({ children }: { children: ReactElement }) => {
  const [toasts, setToasts] = useState<ToastContextApi["toasts"]>([]);

  const toast = useCallback(
    ({
      title,
      description,
      type,
      txHash,
    }: {
      title: Toast["title"];
      description?: Toast["description"];
      type: Toast["type"];
      txHash?: string;
    }) => {
      setToasts((prevToasts) => {
        const id = txHash ?? title.replace(" ", "-");
        const currentToasts = prevToasts.filter((prverToast) => prverToast.id !== id);
        return [{ id, title, description, type }, ...currentToasts];
      });
    },
    [setToasts]
  );
  const toastError = useCallback(
    (title: Toast["title"], description?: Toast["description"], txHash?: string) => {
      return toast({ title, description, type: toastTypes.DANGER, txHash });
    },
    [toast]
  );
  const toastPending = useCallback(
    (title: Toast["title"], description?: Toast["description"], txHash?: string) => {
      return toast({ title, description, type: toastTypes.PENDING, txHash });
    },
    [toast]
  );
  const toastSuccess = useCallback(
    (title: Toast["title"], description?: Toast["description"], txHash?: string) => {
      return toast({ title, description, type: toastTypes.SUCCESS, txHash });
    },
    [toast]
  );
  const toastInfo = useCallback(
    (title: Toast["title"], description?: Toast["description"]) => {
      return toast({ title, description, type: toastTypes.INFO });
    },
    [toast]
  );
  const toastWarning = useCallback(
    (title: Toast["title"], description?: Toast["description"]) => {
      return toast({ title, description, type: toastTypes.WARNING });
    },
    [toast]
  );

  const clear = useCallback(() => {
    setToasts([]);
  }, []);

  const remove = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id));
  }, []);

  return (
    <ToastsContext.Provider
      value={{
        toasts,
        clear,
        remove,
        toastPending,
        toastError,
        toastInfo,
        toastSuccess,
        toastWarning,
      }}
    >
      {children}
    </ToastsContext.Provider>
  );
};

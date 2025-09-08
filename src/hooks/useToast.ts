import { useContext } from "react";
import { ToastsContext } from "contexts/ToastsContext";

const useToast = () => {
  const toastContext = useContext(ToastsContext);

  if (!toastContext) {
    throw new Error("Toasts context undefined");
  }

  return toastContext;
};

export default useToast;

import { useState } from "react";

export type ToggleModalFunc = (
  value?: "open" | "close" | undefined
) => () => void;

const useDialog = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const toggle = (value?: "open" | "close") => () => {
    if (value) {
      setIsShowing(value === "open" ? true : false);
    } else {
      setIsShowing(!isShowing);
    }
  };

  return [isShowing, toggle] as const;
};

export default useDialog;

import { RefObject } from "react";
import useEventListener from "./useEventListener";

type Handler = (event: MouseEvent) => void;

function useOnClickOutside(
  refs: RefObject<HTMLDivElement | HTMLUListElement>[],
  handler: Handler,
  mouseEvent: "mousedown" | "mouseup" = "mousedown"
): void {
  useEventListener(mouseEvent, (event) => {
    let isClickOutside = refs.every((ref) => {
      const el = ref?.current;
      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return false;
      }
      return true;
    });

    if (isClickOutside) {
      handler(event);
    }
  });
}

export default useOnClickOutside;

import { useCallback, useMemo, useState } from "react";

const usePagination = () => {
  const [page, setPage] = useState<number>(1);

  const onChagePage = useCallback((_event: unknown, pageIndex: number) => {
    setPage(pageIndex);
  }, []);

  return [page, onChagePage] as const;
};

export default usePagination;

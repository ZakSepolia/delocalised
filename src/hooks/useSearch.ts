import { useState } from "react";

const useSearch = () => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return [searchText, handleSearch] as const;
};

export default useSearch;

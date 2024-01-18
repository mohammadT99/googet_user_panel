import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQueryParam } from "use-query-params";

const useFilter = () => {
  const [serchParam, setSerchParam] = useSearchParams();
  const addToQuery = (filter) => {
    console.log("sdsdsd----------<<<>>>", filter);
    setSerchParam({ filter: filter });
  };
  return {
    addToQuery,
  };
};

export default useFilter;

import { useState } from 'react';

interface FiltersState {
  color?: string;
  manufacturer?: string;
}

export function useCarsFiltersState() {
  const [filters, setFilters] = useState<FiltersState>({});

  return {
    filters,
    changeFilter: <TKey extends keyof FiltersState>(name: TKey, value: FiltersState[TKey]) => {
      setFilters((prevState) => ({ ...prevState, [name]: value }));
    },
  };
}

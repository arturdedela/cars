import { Box, Paper } from '@mui/material';
import React from 'react';
import FilterSelect from './FilterSelect';
import { getColors, getManufacturers } from '../../api';

interface Filters {
  color: string | undefined;
  manufacturer: string | undefined;
  sort: 'asc' | 'des' | undefined;
}

export interface CarsFiltersProps {
  filters: Filters;
  onChange: <TKey extends keyof Filters>(filterName: TKey, value: Filters[TKey]) => void;
}

const CarsFilters: React.FC<CarsFiltersProps> = ({ filters, onChange }) => {
  return (
    <Paper sx={{ padding: 3 }}>
      <Box>
        <FilterSelect
          label="Color"
          defaultValueLabel="All colors"
          value={filters.color}
          onChange={(value) => onChange('color', value)}
          getOptionsQuery={() => getColors({})}
          transformOptionsData={(rawOption) =>
            // exclamation marks, because every field in api spec is optional. Swagger docs gen should be fixed on the backend side
            rawOption.data.colors!.map((color) => ({ label: color!, value: color! }))
          }
        />
      </Box>
      <Box my={3}>
        <FilterSelect
          label="Manufacturer"
          defaultValueLabel="All manufacturers"
          value={filters.manufacturer}
          onChange={(value) => onChange('manufacturer', value)}
          getOptionsQuery={() => getManufacturers({})}
          transformOptionsData={(rawOption) =>
            rawOption.data.manufacturers!.map(({ name }) => ({ label: name!, value: name! }))
          }
        />
      </Box>
      <Box>
        <FilterSelect
          label="Sort by"
          defaultValueLabel="None"
          value={filters.sort}
          onChange={(value) => onChange('sort', value as 'asc' | 'des')}
          options={[
            { label: 'Mileage - Ascending', value: 'asc' },
            { label: 'Mileage - Descending', value: 'des' },
          ]}
        />
      </Box>
    </Paper>
  );
};

export default CarsFilters;

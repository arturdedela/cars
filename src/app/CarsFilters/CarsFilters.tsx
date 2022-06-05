import { Box, Paper } from '@mui/material';
import React from 'react';
import ColorSelect from './ColorSelect';
import ManufacturerSelect from './ManufacturerSelect';

interface Filters {
  color?: string;
  manufacturer?: string;
}

export interface CarsFiltersProps {
  filters: Filters;
  onChange: <TKey extends keyof Filters>(filterName: TKey, value: Filters[TKey]) => void;
}

const CarsFilters: React.FC<CarsFiltersProps> = ({ filters, onChange }) => {
  return (
    <Paper sx={{ padding: 3 }}>
      <Box>
        <ColorSelect value={filters.color} onChange={(value) => onChange('color', value)} />
      </Box>
      <Box mt={3}>
        <ManufacturerSelect value={filters.manufacturer} onChange={(value) => onChange('manufacturer', value)} />
      </Box>
      {/*  TODO: Apply button */}
    </Paper>
  );
};

export default CarsFilters;

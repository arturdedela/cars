import React from 'react';
import { LinearProgress, MenuItem, TextField } from '@mui/material';
import { useQuery } from 'react-query';
import { getManufacturers } from '../../../api';

export interface ManufacturerSelectProps {
  value?: string;
  onChange: (value: string | undefined) => void;
}

const ALL_MANUFACTURERS = '__ALL__';
// TODO: Make shared ui select
const ManufacturerSelect: React.FC<ManufacturerSelectProps> = ({ value = ALL_MANUFACTURERS, onChange }) => {
  const { isLoading, data } = useQuery({
    queryKey: 'manufacturers',
    queryFn: () => getManufacturers({}),
  });

  return (
    <TextField
      select
      fullWidth
      variant="standard"
      label="Manufacturer"
      value={value}
      onChange={(event) => onChange(event.target.value === ALL_MANUFACTURERS ? undefined : event.target.value)}
    >
      <MenuItem value={ALL_MANUFACTURERS}>All manufacturers</MenuItem>
      {data?.data.manufacturers?.map((manufacturer) => (
        <MenuItem key={manufacturer.name} value={manufacturer.name}>
          {manufacturer.name}
        </MenuItem>
      ))}
      {isLoading && <LinearProgress />}
    </TextField>
  );
};

export default ManufacturerSelect;

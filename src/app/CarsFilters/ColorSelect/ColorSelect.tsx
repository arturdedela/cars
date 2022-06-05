import React from 'react';
import { LinearProgress, MenuItem, TextField } from '@mui/material';
import { useQuery } from 'react-query';
import { getColors } from '../../../api';

export interface ColorSelectProps {
  value?: string;
  onChange: (value: string | undefined) => void;
}

const ALL_COLORS = '__ALL__';
// TODO: Make shared ui select
const ColorSelect: React.FC<ColorSelectProps> = ({ value = ALL_COLORS, onChange }) => {
  const { isLoading, data } = useQuery({
    queryKey: 'colors',
    queryFn: () => getColors({}),
  });

  return (
    <TextField
      select
      fullWidth
      variant="standard"
      label="Color"
      value={value}
      onChange={(event) => onChange(event.target.value === ALL_COLORS ? undefined : event.target.value)}
    >
      <MenuItem value={ALL_COLORS}>All colors</MenuItem>
      {data?.data.colors?.map((color) => (
        <MenuItem key={color} value={color}>
          {color}
        </MenuItem>
      ))}
      {isLoading && <LinearProgress />}
    </TextField>
  );
};

export default ColorSelect;

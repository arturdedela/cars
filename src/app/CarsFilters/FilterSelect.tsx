import React from 'react';
import { LinearProgress, MenuItem, TextField } from '@mui/material';
import { useQuery } from 'react-query';

interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps<TOptionsData> {
  label: string;
  value?: string;
  defaultValueLabel?: string;
  onChange: (value: string | undefined) => void;
  options?: SelectOption[];
  getOptionsQuery?: () => Promise<TOptionsData>;
  transformOptionsData?: (rawOption: TOptionsData) => SelectOption[];
}

const DEFAULT_OPTION_VALUE = '__DEFAULT_OPTION__';

function FilterSelect<TOptionsData>({
  label,
  defaultValueLabel,
  value = DEFAULT_OPTION_VALUE,
  options,
  onChange,
  getOptionsQuery,
  transformOptionsData,
}: SelectProps<TOptionsData>) {
  const { isLoading, data } = useQuery({
    queryKey: label,
    enabled: Boolean(getOptionsQuery),
    queryFn: getOptionsQuery,
    select: transformOptionsData,
  });

  const renderOptions = (options: SelectOption[]) =>
    options.map((option) => (
      <MenuItem key={option.label} value={option.value}>
        {option.label}
      </MenuItem>
    ));

  return (
    <TextField
      select
      fullWidth
      variant="standard"
      label={label}
      value={value}
      onChange={(event) => onChange(event.target.value === DEFAULT_OPTION_VALUE ? undefined : event.target.value)}
    >
      <MenuItem value={DEFAULT_OPTION_VALUE}>{defaultValueLabel}</MenuItem>
      {options && renderOptions(options)}
      {data && renderOptions(data)}
      {isLoading && <LinearProgress />}
    </TextField>
  );
}

export default FilterSelect;

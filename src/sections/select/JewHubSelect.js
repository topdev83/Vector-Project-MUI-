import { useState } from 'react';

// material-ui
import { FormControl, MenuItem, Select } from '@mui/material';

// ==============================|| COMPONENTS - HELPER TEXT ||============================== //

export default function JewHubSelect() {
  const [jew, setJew] = useState('');

  const handleChange = (event) => {
    setJew(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200, marginLeft: '7%' }}>
      <Select value={jew} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
        <MenuItem value="" sx={{ color: 'text.secondary' }}>
          Jew-Hub
        </MenuItem>
        <MenuItem value={10}>Personal</MenuItem>
        <MenuItem value={20}>PSU-Team</MenuItem>
      </Select>
    </FormControl>
  );
}

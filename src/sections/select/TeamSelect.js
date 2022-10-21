import { useState } from 'react';

// material-ui
import { FormControl, MenuItem, Select } from '@mui/material';

// ==============================|| COMPONENTS - HELPER TEXT ||============================== //

export default function TeamSelect() {
  const [team, setTeam] = useState('');

  const handleChange = (event) => {
    setTeam(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200, marginLeft: '8.4%' }}>
      <Select value={team} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
        <MenuItem value="" sx={{ color: 'text.secondary' }}>
          Team Name
        </MenuItem>
        <MenuItem value={10}>Personal</MenuItem>
        <MenuItem value={20}>PSU-Team</MenuItem>
      </Select>
    </FormControl>
  );
}

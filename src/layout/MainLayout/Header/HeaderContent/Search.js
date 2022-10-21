// material-ui
import { Box, FormControl, OutlinedInput, IconButton, InputAdornment } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => (
  <Box sx={{ width: '45%', ml: { xs: 2, md: 1, sm: 3 } }}>
    <FormControl
      sx={{
        width: { xs: 250, md: 300, sm: 250 },
        borderRadius: '6px',
        color: '#7A7AB3'
      }}
    >
      <OutlinedInput
        size="small"
        id="header-search"
        sx={{ height: '40px' }}
        startAdornment={
          <InputAdornment position="start" sx={{ mr: -0.5 }}>
            <SearchOutlined />
          </InputAdornment>
        }
        aria-describedby="header-sewarch-text"
        inputProps={{
          'aria-label': 'weight'
        }}
        placeholder="Search"
      />
    </FormControl>
    <IconButton
      style={{ fontSize: '25px', background: '#3b3b3e', borderRadius: '55px', padding: '5px', marginLeft: '5px', marginTop: '2px' }}
    >
      <SearchOutlined style={{ color: '#bbbbbb' }} />
    </IconButton>
  </Box>
);

export default Search;

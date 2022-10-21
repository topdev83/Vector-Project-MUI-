// material-ui
import { Box, FormControl, OutlinedInput, IconButton, InputAdornment } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const UserSearch = () => (
  <Box>
    <FormControl
      sx={{
        width: { xs: '250', md: 300, sm: 250 },
        borderRadius: '9px',
        color: '#7A7AB3',
        height: '25px'
      }}
    >
      <OutlinedInput
        size="small"
        id="header-search"
        sx={{ height: '25px' }}
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
      style={{
        fontSize: '15px',
        background: '#414371',
        borderRadius: '55px',
        padding: '1px',
        marginLeft: '5px',
        width: '25px',
        height: '25px'
      }}
    >
      <SearchOutlined style={{ color: '#bbbbbb' }} />
    </IconButton>
  </Box>
);

export default UserSearch;

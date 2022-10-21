import PropTypes from 'prop-types';

// material-ui
import { Box, Typography } from '@mui/material';

// project import
import NavGroup from './NavGroup';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
  let filteredMenuItems = [];

  const navGroups = filteredMenuItems.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <Box sx={{ pt: 1 }}>{navGroups}</Box>;
};

Navigation.propTypes = {
  searchValue: PropTypes.string
};

export default Navigation;

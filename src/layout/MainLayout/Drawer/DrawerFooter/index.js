import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { SettingOutlined } from '@ant-design/icons';

// project import
import DrawerFooterStyled from './DrawerFooterStyled';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerFooter = ({ open }) => {
  const theme = useTheme();

  return (
    <DrawerFooterStyled theme={theme} open={open}>
      <SettingOutlined style={{ fontSize: open ? 'auto' : '20px' }} />
    </DrawerFooterStyled>
  );
};

DrawerFooter.propTypes = {
  open: PropTypes.bool
};

export default DrawerFooter;

import PropTypes from 'prop-types';

import { Dialog, Stack, IconButton } from '@mui/material';
import { UserAddOutlined } from '@ant-design/icons';

import MainCard from 'components/MainCard';
import UserSearch from 'sections/search';
import IPAddressCard from 'sections/cards/IPAddressCard';
import UserSettingCard from 'sections/cards/UserSettingCard';

function UserManagementDialog({ onClose, open }) {
  return (
    <>
      <Dialog
        onClose={onClose}
        open={open}
        PaperProps={{
          style: { borderRadius: '20px', maxWidth: '1150px', width: '1150px' }
        }}
      >
        <MainCard title={'User Management'} iconType={true} border={true} align={true} sx={{ background: '#1E1E35' }}>
          <Stack spacing={2} direction={'column'}>
            <Stack spacing={2} direction={'row'}>
              <UserSearch />
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
                <UserAddOutlined style={{ color: '#bbbbbb' }} />
              </IconButton>
            </Stack>
            <UserSettingCard />
            <IPAddressCard />
          </Stack>
        </MainCard>
      </Dialog>
    </>
  );
}

UserManagementDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  iconType: PropTypes.bool,
  border: PropTypes.bool,
  title: PropTypes.string,
  align: PropTypes.bool
};
export default UserManagementDialog;

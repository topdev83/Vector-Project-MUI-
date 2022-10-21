import { Stack, TextField, IconButton } from '@mui/material';
import { PlusOutlined, DeleteFilled } from '@ant-design/icons';

function PermissionPanel() {
  return (
    <>
      <Stack spacing={3} direction={'column'}>
        <Stack spacing={2} direction={'row'}>
          <TextField
            id="jew-hub-input"
            placeholder="JewHub.PhantomForces*"
            InputProps={{ sx: { borderRadius: '9px', height: '25px', width: '308px' } }}
            variant="outlined"
          />
          <IconButton
            style={{
              fontSize: '15px',
              background: '#414371',
              borderRadius: '2px',
              padding: '1px',
              marginLeft: '2%',
              width: '25px',
              height: '25px'
            }}
          >
            <PlusOutlined style={{ color: '#bbbbbb' }} />
          </IconButton>
        </Stack>
        <IconButton
          style={{
            width: '132px',
            height: '31px',
            fontSize: '15px',
            background: '#820B0B',
            borderRadius: '9px',
            padding: '1px'
          }}
        >
          <DeleteFilled style={{ color: '#bbbbbb' }} />
        </IconButton>
      </Stack>
    </>
  );
}

export default PermissionPanel;

import { Stack, Typography, IconButton, Switch, Button } from '@mui/material';
import { PlusOutlined } from '@ant-design/icons';

function HomePanel() {
  return (
    <>
      <Stack spacing={1} direction={'column'}>
        <Typography variant="body2" sx={{ color: '#7A7AB3', textDecoration: 'underline' }}>
          Resets
        </Typography>
        <Stack spacing={3} direction={'row'}>
          <Button
            sx={{
              background: '#52D772',
              color: 'black',
              borderRadius: '6px',
              height: '25px',
              '&:hover': { background: '#27a544', color: '#737373' }
            }}
          >
            Reset Key
          </Button>
          <Button
            sx={{
              background: '#52D772',
              color: 'black',
              borderRadius: '6px',
              height: '25px',
              '&:hover': { background: '#27a544', color: '#737373' }
            }}
          >
            Reset Hwid
          </Button>
          <Button
            sx={{
              background: '#52D772',
              color: 'black',
              borderRadius: '6px',
              height: '25px',
              '&:hover': { background: '#27a544', color: '#737373' }
            }}
          >
            Reset IP
          </Button>
          <Button
            sx={{
              background: '#52D772',
              color: 'black',
              borderRadius: '6px',
              height: '25px',
              '&:hover': { background: '#27a544', color: '#737373' }
            }}
          >
            Reset Transfer Time
          </Button>
          <IconButton
            style={{
              fontSize: '15px',
              background: '#414371',
              borderRadius: '2px',
              padding: '1px',
              marginLeft: '5px',
              width: '25px',
              height: '25px'
            }}
          >
            <PlusOutlined style={{ color: '#bbbbbb' }} />
          </IconButton>
        </Stack>
        <Typography variant="body2" sx={{ color: '#7A7AB3', textDecoration: 'underline' }}>
          Flags
        </Typography>
        <Stack spacing={1} direction={'row'}>
          <span
            style={{
              marginTop: '0.2%',
              fontSize: '15px',
              background: '#414371',
              borderRadius: '4px',
              padding: '1px',
              width: '80px',
              height: '50px'
            }}
          >
            <Typography variant="body2" sx={{ color: '#7A7AB3', marginLeft: '2px', textDecoration: 'underline' }}>
              WhiteList
            </Typography>
            <Switch sx={{ marginTop: '3%', marginLeft: '2px' }} />
          </span>
          <IconButton
            style={{
              marginTop: '0.2%',
              fontSize: '25px',
              background: '#414371',
              borderRadius: '2px',
              padding: '1px',
              marginLeft: '5px',
              width: '50px',
              height: '50px'
            }}
          >
            <PlusOutlined style={{ color: '#bbbbbb' }} />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}

export default HomePanel;

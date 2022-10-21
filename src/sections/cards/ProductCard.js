import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';
import { Typography, Stack } from '@mui/material';
import { SettingFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function ProductCard() {
  // const theme = useTheme();
  return (
    <>
      <Link to="/statistics" style={{ textDecoration: 'none' }}>
        <MainCard border={false} sx={{ width: '200px', height: '200px', background: '#1E1E35' }}>
          <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
            Product Name
          </Typography>
          <Stack direction={'column'} spacing={1}>
            <Avatar
              src="/static/user.png"
              alt="user"
              style={{ marginLeft: '15%', marginTop: '4%', width: '110px', height: '110px' }}
            ></Avatar>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Avatar src="/static/user.png" alt="user" style={{ width: ' 15px', height: '15px', marginTop: '7%' }} />
                <Typography variant="subtitle1" sx={{ color: '#7A7AB3', marginLeft: '3%' }}>
                  69
                </Typography>
              </span>
              <span>
                <SettingFilled style={{ color: '#7A7AB3' }} />
              </span>
            </Stack>
          </Stack>
        </MainCard>
      </Link>
    </>
  );
}

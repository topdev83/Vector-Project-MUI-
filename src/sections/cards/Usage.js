import MainCard from 'components/MainCard';
import { Typography } from '@mui/material';

export default function Usage() {
  return (
    <MainCard title={'Usage'} border={true} sx={{ background: '#1E1E35', borderRadius: '15px' }}>
      <Typography variant={'h2'} sx={{ textAlign: 'center' }}>
        $13.00
      </Typography>
    </MainCard>
  );
}

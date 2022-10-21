import PropTypes from 'prop-types';
import MainCard from 'components/MainCard';
import { Avatar, Stack, Typography } from '@mui/material';
import { SettingFilled } from '@ant-design/icons';

// eslint-disable-next-line react/prop-types
const SettingCard = ({ src, title, number, style }) => {
  return (
    <MainCard border={false} sx={{ background: '#1E1E35', borderRadius: '15px' }}>
      <Stack direction={'column'}>
        <SettingFilled style={{ color: '#7A7AB3', display: 'flex', justifyContent: 'end' }} />
        <span
          style={{
            marginTop: '3%',
            background: '#191829',
            border: '1px',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            width: '70px',
            height: '75px',
            marginLeft: '20px'
          }}
        >
          <Avatar alt="None" src={src} style={style} variant="square" />
        </span>
        <Typography variant="h4" style={{ textAlign: 'center', marginTop: '10px' }}>
          {number}
        </Typography>
        <Typography variant="h4" style={{ textAlign: 'center' }}>
          {title}
        </Typography>
      </Stack>
    </MainCard>
  );
};

SettingCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.string
};

export default SettingCard;

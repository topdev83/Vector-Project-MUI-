import { Typography, Grid } from '@mui/material';

import ChartCard from 'sections/cards/ChartCard';
import ScriptManagement from 'sections/script/ScriptManagement';
import Usage from 'sections/cards/Usage';
import SettingCard from 'sections/cards/SettingCard';

const vectorStyle = {
  height: '20px',
  width: '30px',
  marginTop: '40%'
};

const userStyle = {
  height: '30px',
  width: '30px',
  marginTop: '33%'
};

const clockStyle = {
  height: '35px',
  width: '30px',
  marginTop: '25%'
};
const Statistics = () => {
  return (
    <>
      <Typography variant="h2" sx={{ mt: 3 }}>
        General Statistics
      </Typography>
      <Grid container spacing={1} sx={{ mt: 2 }}>
        <Grid item lg={10} md={10}>
          <Grid container spacing={2}>
            <Grid item md={6} lg={6}>
              <ChartCard />
            </Grid>
            <Grid item md={4} lg={4}>
              <ScriptManagement />
            </Grid>
            <Grid item md={2} lg={2}>
              <Usage />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={10} md={10}>
          <Grid container spacing={2}>
            <Grid item md={2} lg={2}>
              <SettingCard src="static/vector.png" title={'Executations'} number={'1,000,000'} style={vectorStyle} />
            </Grid>
            <Grid item md={2} lg={2}>
              <SettingCard src="static/user1.png" title={'Users'} number={'1,000,000'} style={userStyle} />
            </Grid>
            <Grid item md={2} lg={2}>
              <SettingCard src="static/clock.png" title={'Time Used'} number={'10,024 hr'} style={clockStyle} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Statistics;

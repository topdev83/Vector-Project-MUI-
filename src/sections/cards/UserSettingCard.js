import { Grid, Card, Stack, FormControl, TextField, InputLabel, Avatar, Box, Tab, IconButton } from '@mui/material';
import NumberFormat from 'react-number-format';

import { TabContext, TabList, TabPanel } from '@mui/lab';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

import HomePanel from 'sections/tabPanel/HomePanel';
import DataPanel from 'sections/tabPanel/DataPanel';
import PermissionPanel from 'sections/tabPanel/PermissionPanel';

const tabStyle = {
  active_tab: {
    color: '#5137BE',
    fontSize: '16px'
  },
  default_tab: {
    fontSize: '16px',
    color: '#7A7AB3'
  }
};

function UserSettingCard() {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getStyle = (value) => {
    return value ? tabStyle.active_tab : tabStyle.default_tab;
  };
  return (
    <>
      <Card sx={{ borderRadius: '10px' }}>
        <Grid container>
          <Grid item xs={11.7} sx={{ background: '#3d3d64ad', height: '320.325px' }}>
            <Grid container>
              <Grid item xs={3.8}>
                <Stack spacing={2} direction={'row'} sx={{ padding: '15px' }}>
                  <FormControl variant="standard" sx={{ width: '100%' }}>
                    <Stack spacing={3} direction={'column'}>
                      <InputLabel shrink htmlFor="uuid-input" sx={{ fontSize: '20px', color: '#7A7AB3' }}>
                        UUID
                      </InputLabel>
                      <TextField
                        id="uuid-input"
                        placeholder="cb7029d8-d62c-4467-b9c7-caa7aa75ffea"
                        InputProps={{ sx: { borderRadius: '9px', height: '25px' } }}
                        variant="outlined"
                      />
                    </Stack>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={2.3}>
                <Stack spacing={2} direction={'row'} sx={{ padding: '15px', color: '#7A7AB3' }}>
                  <FormControl variant="standard" sx={{ width: '100%' }}>
                    <Stack spacing={3} direction={'column'}>
                      <InputLabel shrink htmlFor="key-input" sx={{ fontSize: '20px', color: '#7A7AB3' }}>
                        Key
                      </InputLabel>
                      <TextField
                        id="key-input"
                        placeholder="Joe biden"
                        InputProps={{ sx: { borderRadius: '9px', height: '25px' } }}
                        variant="outlined"
                      />
                    </Stack>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={3.8}>
                <Stack spacing={2} direction={'row'} sx={{ padding: '15px' }}>
                  <FormControl variant="standard" sx={{ width: '100%' }}>
                    <Stack spacing={3} direction={'column'}>
                      <InputLabel shrink htmlFor="uuid-input" sx={{ fontSize: '20px', color: '#7A7AB3' }}>
                        HWID
                      </InputLabel>
                      <TextField
                        id="uuid-input"
                        placeholder="8c2ee4f8-1c40-4d09-a25b-103e67d00d98"
                        InputProps={{ sx: { borderRadius: '9px', height: '25px' } }}
                        variant="outlined"
                      />
                    </Stack>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={2.1}>
                <Stack spacing={2} direction={'row'} sx={{ padding: '15px' }}>
                  <FormControl variant="standard" sx={{ width: '100%' }}>
                    <Stack spacing={3} direction={'column'}>
                      <InputLabel shrink htmlFor="uuid-input" sx={{ fontSize: '20px', color: '#7A7AB3' }}>
                        IP Address
                      </InputLabel>
                      <NumberFormat
                        format="###.###.###.###"
                        mask="_"
                        customInput={TextField}
                        placeholder="127.0.0.1"
                        InputProps={{ sx: { borderRadius: '9px', height: '25px' } }}
                      />
                    </Stack>
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <TabContext value={value}>
              <Box>
                <TabList onChange={handleChange} indicatorColor="none">
                  <Tab label="Home" value="1" style={getStyle(value === '1')} />
                  <Tab label="Data" value="2" style={getStyle(value === '2')} />
                  <Tab label="Permissions" value="3" style={getStyle(value === '3')} />
                  <Tab label="Logs" value="4" style={getStyle(value === '4')} />
                  <Tab label="History" value="5" style={getStyle(value === '5')} />
                  <IconButton
                    style={{
                      marginTop: '1%',
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
                </TabList>
              </Box>
              <TabPanel value="1">
                <HomePanel />
              </TabPanel>
              <TabPanel value="2">
                <DataPanel />
              </TabPanel>
              <TabPanel value="3">
                <PermissionPanel />
              </TabPanel>
            </TabContext>
          </Grid>
          <Grid item xs={0.3} sx={{ background: '#6363FF' }}>
            <Avatar src={'static/up.png'} sx={{ width: '15px', height: '15px', mt: 3, marginLeft: '20%' }}></Avatar>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default UserSettingCard;

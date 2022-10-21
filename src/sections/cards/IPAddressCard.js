import { Grid, Card, Stack, FormControl, TextField, InputLabel, Avatar } from '@mui/material';
import NumberFormat from 'react-number-format';

function IPAddressCard() {
  return (
    <>
      <Card sx={{ borderRadius: '10px' }}>
        <Grid container>
          <Grid item xs={11.7} sx={{ background: '#3d3d64ad' }}>
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
                <Stack spacing={2} direction={'row'} sx={{ padding: '15px' }}>
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
          </Grid>
          <Grid item xs={0.3} sx={{ background: '#6363FF' }}>
            <Avatar src={'static/down.png'} sx={{ width: '15px', height: '15px', mt: 3, marginLeft: '20%' }}></Avatar>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default IPAddressCard;

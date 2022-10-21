import { Stack, TextField, IconButton, FormControl, InputLabel } from '@mui/material';
import { PlusOutlined } from '@ant-design/icons';

function DataPanel() {
  return (
    <>
      <Stack spacing={3} direction={'column'}>
        <Stack spacing={2} direction={'row'}>
          <TextField
            id="add-field-input"
            placeholder="Add Field"
            InputProps={{ sx: { borderRadius: '9px', height: '25px' } }}
            variant="outlined"
          />
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
        <Stack spacing={2} direction={'row'}>
          <FormControl variant="standard">
            <Stack spacing={3} direction={'column'}>
              <InputLabel shrink htmlFor="beta-input" sx={{ fontSize: '20px', color: '#7A7AB3' }}>
                Beta
              </InputLabel>
              <TextField
                id="beta-input"
                placeholder="true"
                InputProps={{ sx: { borderRadius: '9px', height: '25px' } }}
                variant="outlined"
              />
            </Stack>
          </FormControl>
          <FormControl variant="standard">
            <Stack spacing={3} direction={'column'}>
              <InputLabel shrink htmlFor="ni-input" sx={{ fontSize: '20px', color: '#7A7AB3' }}>
                NI
              </InputLabel>
              <TextField id="ni-input" placeholder="gger" InputProps={{ sx: { borderRadius: '9px', height: '25px' } }} variant="outlined" />
            </Stack>
          </FormControl>
        </Stack>
      </Stack>
    </>
  );
}

export default DataPanel;

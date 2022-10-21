import PropTypes from 'prop-types';

import { Dialog, FormControl, Stack, InputLabel, TextField, Button, Select, MenuItem, FormHelperText } from '@mui/material';
import { useState } from 'react';

import MainCard from 'components/MainCard';

function CompilerDialog({ onClose, open }) {
  const [module, setModule] = useState('');

  const handleChange = (event) => {
    setModule(event.target.value);
  };

  return (
    <>
      <Dialog
        onClose={onClose}
        open={open}
        PaperProps={{
          style: { borderRadius: '20px', width: '500px' }
        }}
      >
        <MainCard title={'Script Compiler'} iconType={true} border={true} sx={{ background: '#1E1E35' }}>
          <FormControl variant="standard" sx={{ width: '100%' }}>
            <Stack spacing={3} direction={'column'}>
              <InputLabel shrink htmlFor="script-file-input" sx={{ fontSize: '18px' }}>
                Script File
              </InputLabel>
              <TextField
                id="script-file-input"
                placeholder="Upload File..."
                InputProps={{ sx: { borderRadius: '12px', height: '35px' } }}
                variant="outlined"
              />
            </Stack>
          </FormControl>
          <FormControl variant="standard" sx={{ width: '100%', mt: 2 }}>
            <Stack spacing={3} direction={'column'}>
              <InputLabel shrink htmlFor="game-id-input" sx={{ fontSize: '18px' }}>
                Game ID
              </InputLabel>
              <TextField
                id="game-id-input"
                placeholder="654645246"
                InputProps={{ sx: { borderRadius: '12px', height: '35px' } }}
                variant="outlined"
              />
            </Stack>
          </FormControl>
          <FormControl sx={{ width: '100%', mt: 2 }}>
            <Stack spacing={1} direction={'column'}>
              <FormHelperText htmlFor="module-select" sx={{ color: 'white', ml: 0 }}>
                Modules
              </FormHelperText>
              <Select
                value={module}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ borderRadius: '12px', height: '35px' }}
              >
                <MenuItem value="" sx={{ color: 'text.secondary' }}>
                  None
                </MenuItem>
                <MenuItem value={10}>example1</MenuItem>
                <MenuItem value={20}>example2</MenuItem>
                <MenuItem value={30}>example3</MenuItem>
              </Select>
            </Stack>
          </FormControl>
          <FormControl variant="standard" sx={{ width: '100%', mt: 2 }}>
            <Stack spacing={3} direction={'column'}>
              <InputLabel shrink htmlFor="constant-input" sx={{ fontSize: '18px' }}>
                Constants To Encrypt
              </InputLabel>
              <TextField
                id="constant-input"
                placeholder="500000"
                InputProps={{ sx: { borderRadius: '12px', height: '35px' } }}
                variant="outlined"
              />
            </Stack>
          </FormControl>
          <FormControl variant="standard" sx={{ width: '100%', mt: 2 }}>
            <Stack spacing={3} direction={'column'}>
              <InputLabel shrink htmlFor="message-input" sx={{ fontSize: '18px' }}>
                Message
              </InputLabel>
              <TextField
                id="message-input"
                placeholder="Cool Message!"
                InputProps={{ sx: { borderRadius: '12px', height: '35px' } }}
                variant="outlined"
              />
            </Stack>
          </FormControl>
          <Button sx={{ border: '2px solid #3560c1', borderRadius: '25px', color: '#d4dbd9', height: '35px', width: '100%', mt: 2 }}>
            Compile
          </Button>
        </MainCard>
      </Dialog>
    </>
  );
}

CompilerDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  iconType: PropTypes.bool,
  border: PropTypes.bool,
  title: PropTypes.string,
  shrink: PropTypes.bool
};

export default CompilerDialog;

import MainCard from 'components/MainCard';
import { Stack, Switch, Typography, Button } from '@mui/material';

import { useState } from 'react';
import CompilerDialog from 'sections/Dialog/CompilerDialog';
import UserManagementDialog from 'sections/Dialog/UserManagementDialog';

export default function ScriptManagement() {
  const [compilerOpen, setCompilerOpen] = useState(false);
  const [userManagementOpen, setUserManagementOpen] = useState(false);

  const handleComplierClickOpen = () => {
    setCompilerOpen(true);
  };

  const handleCompilerClose = () => {
    setCompilerOpen(false);
  };

  const handleUserManagementOpen = () => {
    setUserManagementOpen(true);
  };

  const handleUserManagementClose = () => {
    setUserManagementOpen(false);
  };

  return (
    <MainCard title={'Script Management'} border={true} sx={{ background: '#1E1E35', borderRadius: '15px' }}>
      <Stack direction={'column'} spacing={1}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Script Status
          </Typography>
          <Switch />
        </Stack>
        <Button
          sx={{ border: '2px solid #3560c1', borderRadius: '25px', color: '#d4dbd9', height: '30px' }}
          onClick={handleComplierClickOpen}
        >
          Compile
        </Button>
        <CompilerDialog open={compilerOpen} onClose={handleCompilerClose} />
        <Button
          sx={{ border: '2px solid #3560c1', borderRadius: '25px', color: '#d4dbd9', height: '30px' }}
          onClick={handleUserManagementOpen}
        >
          Manage User
        </Button>
        <UserManagementDialog open={userManagementOpen} onClose={handleUserManagementClose} />
        <Button sx={{ border: '2px solid #3560c1', borderRadius: '25px', color: '#d4dbd9', height: '30px' }}>Generate Keys</Button>
        <Button sx={{ border: '2px solid #3560c1', borderRadius: '25px', color: '#d4dbd9', height: '30px' }}>Manage Modules</Button>
      </Stack>
    </MainCard>
  );
}

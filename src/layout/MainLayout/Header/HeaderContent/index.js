// import { useMemo } from 'react';

// material-ui
import { Box, Stack, Typography, useMediaQuery, Fab } from '@mui/material';

// project import
// import useConfig from 'hooks/useConfig';
import Search from './Search';
// import Message from './Message';
import Profile from './Profile';
// import Localization from './Localization';
// import Notification from './Notification';
// import Customization from './Customization';
import MobileSection from './MobileSection';
// import MegaMenuSection from './MegaMenuSection';
import TeamSelect from 'sections/select/TeamSelect';
import { useLocation } from 'react-router';
import JewHubSelect from 'sections/select/JewHubSelect';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  // const { i18n } = useConfig();

  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const location = useLocation();
  let pathname = location?.pathname.slice(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const localization = useMemo(() => <Localization />, [i18n]);

  // const megaMenu = useMemo(() => <MegaMenuSection />, []);

  return (
    <>
      {!matchesXs &&
        (pathname === 'projects' ? (
          <Typography variant="h1" sx={{ marginLeft: '2%' }}>
            Projects
          </Typography>
        ) : (
          ''
        ))}
      {!matchesXs && (pathname === 'projects' ? <TeamSelect /> : '')}
      {!matchesXs && (pathname === 'projects' ? <Search /> : '')}
      {/* {!matchesXs && megaMenu}
      {!matchesXs && localization} */}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
      <Stack direction={'row'} justifyContent={'space-between'}>
        {!matchesXs &&
          (pathname === 'statistics' ? (
            <span style={{ paddingRight: '130%' }}>
              <JewHubSelect />
            </span>
          ) : (
            ''
          ))}
        <Stack direction={'row'} spacing={2}>
          {!matchesXs &&
            (pathname === 'statistics' ? (
              <Fab variant="extended" sx={{ mt: 1, width: '120px', bgcolor: '#ff66ff', '&:hover': { bgcolor: 'secondary.light' } }}>
                Share
              </Fab>
            ) : (
              ''
            ))}
          {!matchesXs && <Profile />}
        </Stack>
      </Stack>

      {/* <Notification />
      <Message /> */}
      {/* <Customization /> */}

      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;

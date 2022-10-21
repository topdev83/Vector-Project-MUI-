import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography, Avatar, Stack } from '@mui/material';

// project import
import Highlighter from './third-party/Highlighter';

import { useLocation } from 'react-router';

// header style

// ==============================|| CUSTOM - MAIN CARD ||============================== //

const MainCard = forwardRef(
  (
    {
      border = true,
      boxShadow,
      children,
      subheader,
      content = true,
      contentSX = {},
      darkTitle,
      divider = true,
      elevation,
      secondary,
      shadow,
      sx = {},
      title,
      align,
      iconType,
      codeHighlight = false,
      codeString,
      modal = false,
      ...others
    },
    ref
  ) => {
    const theme = useTheme();
    boxShadow = theme.palette.mode === 'dark' ? boxShadow || true : boxShadow;

    const location = useLocation();
    let pathname = location?.pathname.slice(1);

    const headerSX =
      pathname === 'statistics'
        ? { background: '#5252cc94', textAlign: 'center' }
        : {
            p: 2.5,
            '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' }
          };

    return (
      <Card
        elevation={elevation || 0}
        ref={ref}
        {...others}
        sx={{
          position: 'relative',
          border: border ? '1px solid' : 'none',
          borderRadius: 1,
          borderColor: theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A800,
          boxShadow: boxShadow && (!border || theme.palette.mode === 'dark') ? shadow || theme.customShadows.z1 : 'inherit',
          ':hover': {
            boxShadow: boxShadow ? shadow || theme.customShadows.z1 : 'inherit'
          },
          ...(codeHighlight && {
            '& pre': {
              m: 0,
              p: '12px !important',
              fontFamily: theme.typography.fontFamily,
              fontSize: '0.75rem'
            }
          }),
          ...(modal && {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: `calc( 100% - 50px)`, sm: 'auto' },
            '& .MuiCardContent-root': {
              overflowY: 'auto',
              minHeight: 'auto',
              maxHeight: `calc(100vh - 200px)`
            }
          }),
          ...sx
        }}
      >
        {/* card header and action */}
        {!darkTitle && title && (
          <CardHeader
            sx={headerSX}
            titleTypographyProps={{ variant: 'h4' }}
            title={
              <Stack direction={'row'} justifyContent={align ? 'left' : 'center'}>
                {iconType === true ? (
                  <Avatar src={'/favicon.svg'} sx={{ width: '20px', height: '20px', mr: 1, marginTop: align ? '0.5%' : '1%' }}></Avatar>
                ) : (
                  ''
                )}
                <Typography variant="h4">{title}</Typography>
              </Stack>
            }
            action={secondary}
            subheader={subheader}
          />
        )}
        {darkTitle && title && (
          <CardHeader
            sx={headerSX}
            title={
              <Stack direction={'row'}>
                {iconType === true ? (
                  <Avatar src={'/favicon.svg'} sx={{ width: '20px', height: '20px', mr: 1, marginTop: '2%' }}></Avatar>
                ) : (
                  ''
                )}
                <Typography variant="h4">{title}</Typography>
              </Stack>
            }
            action={secondary}
          />
        )}

        {/* content & header divider */}
        {title && divider && <Divider />}

        {/* card content */}
        {content && <CardContent sx={contentSX}>{children}</CardContent>}
        {!content && children}

        {/* card footer - clipboard & highlighter  */}
        {codeString && (
          <>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Highlighter codeString={codeString} codeHighlight={codeHighlight} />
          </>
        )}
      </Card>
    );
  }
);

MainCard.propTypes = {
  border: PropTypes.bool,
  iconType: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  subheader: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  divider: PropTypes.bool,
  elevation: PropTypes.number,
  secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  modal: PropTypes.bool,
  codeHighlight: PropTypes.bool,
  codeString: PropTypes.string,
  align: PropTypes.bool
};

export default MainCard;

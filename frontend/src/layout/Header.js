import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

import CustomButton from '../components/CustomButton';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faGear);

const Header = ({ onSidebarOpen }) => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <React.Fragment>
      <AppBar
        position='sticky'
        elevation={trigger ? 1 : 0}
        sx={{
          top: 0,
          border: 0,
          backgroundColor: trigger
            ? theme.palette.background.default
            : 'transparent',
        }}
      >
        <Toolbar sx={{ minHeight: 70 }}>
          <IconButton
            onClick={() => onSidebarOpen()}
            aria-label='Menu'
            sx={{
              color: theme.palette.primary.main,
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuIcon fontSize='medium' />
          </IconButton>
          <Link href='/' style={{ textDecoration: 'none' }}>
            <IconButton size='medium' disabled>
              <FontAwesomeIcon
                icon={faGear}
                style={{
                  color: theme.palette.primary.main,
                  height: 30,
                  width: 30,
                }}
              />
              <Typography
                variant='h3'
                component='div'
                sx={{
                  flexGrow: 1,
                  marginLeft: '10px',
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: { md: 'inline', xs: 'none' },
                }}
              >
                Tomás Portfolio
              </Typography>
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              alignItems: 'center',
              display: { md: 'flex', xs: 'none' },
            }}
          >
            <CustomButton href='#home' text='Home' />
            <CustomButton href='#about' text='About' />
            <CustomButton href='#projects' text='Projects' />
            <CustomButton href='#technologies' text='Technologies' />
            <CustomButton href='#contact' text='Contact' />
          </Box>
          <Divider
            orientation='vertical'
            sx={{
              height: 32,
              marginX: 2,
              display: { lg: 'flex', md: 'none', xs: 'none' },
            }}
          />
          <Box sx={{ display: { lg: 'flex', md: 'flex', xs: 'none' } }}>
            <IconButton
              aria-label='GitHub'
              href='https://github.com/TomasCB24'
              target='_blank'
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              <GitHubIcon fontSize='large' />
            </IconButton>
            <IconButton
              aria-label='LinkedIn'
              href='https://www.linkedin.com/in/tom%C3%A1s-camero-borrego/'
              target='_blank'
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              <LinkedInIcon fontSize='large' />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

Header.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Header;

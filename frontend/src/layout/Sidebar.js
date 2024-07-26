import React from 'react';
import PropTypes from 'prop-types';
//import Link from "next/link";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import CustomButton from '../components/CustomButton';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faGear);

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Drawer
        anchor='left'
        onClose={() => onClose()}
        open={open}
        variant='temporary'
        sx={{
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: 280,
          },
        }}
      >
        <Box sx={{ height: '100%', padding: 1 }}>
          <Box width={1} paddingX={2} paddingY={1}>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <IconButton size='large' disabled>
                <FontAwesomeIcon
                  icon={faGear}
                  style={{
                    color: theme.palette.primary.main,
                    height: 45,
                    width: 45,
                  }}
                />
                <Typography
                  variant='h3'
                  color={theme.palette.primary.main}
                  fontWeight={700}
                  textDecoration='none'
                  flexGrow={1}
                  marginLeft='10px'
                >
                  Tomás Portfolio
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box paddingX={2} paddingY={2}>
            <CustomButton href='#home' text='Home' />
            <Box paddingY={1}>
              <CustomButton href='#about' text='About' />
            </Box>
            <Box paddingY={1}>
              <CustomButton href='#education' text='Education' />
            </Box>
            <Box paddingY={1}>
              <CustomButton href='#languaje' text='Languajes' />
            </Box>
            <Box paddingY={1}>
              <CustomButton href='#projects' text='Projects' />
            </Box>
            <Box paddingY={1}>
              <CustomButton href='#technologies' text='Technologies' />
            </Box>
            <Box paddingY={1}>
              <CustomButton href='#contact' text='Contact' />
            </Box>
            <Box>
              <Stack direction='row' spacing={1}>
                <IconButton
                  aria-label='Github'
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
              </Stack>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default Sidebar;

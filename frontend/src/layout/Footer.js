import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const [footer, setFooter] = useState([]);

  const fetchFooter = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/footer`, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setFooter(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchFooter();
  }, []);

  return (
    <React.Fragment>
      <Box
        backgroundColor={theme.palette.background.default}
        paddingTop='10px'
        paddingBottom='10px'
        position='fixed'
        bottom='0'
        left='0'
        width='100%'
      >
        <Divider />
        <Box
          backgroundColor={theme.palette.background.default}
          position='relative'
          padding={theme.spacing(0.35)}
          height="20px"
        >
          {footer.slice(0, 1).map((item, index) => (
            <Grid container key={index} justifyContent='center'>
              <Grid item xs={12}>
                <Box textAlign="center">
                  <Typography variant='body2' color={theme.palette.text.secondary}>
                    Copyright &copy; {new Date().getFullYear()} {item.copyright}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Footer;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Languajes = () => {
  const theme = useTheme();
  const [languaje, setLanguaje] = useState([]);

  const fetchLanguaje = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/languaje`, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setLanguaje(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchLanguaje();
  }, []);

  return (
    <div id='languaje'>
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box marginBottom={4}>
          <Typography
            variant='h2'
            align='center'
            fontWeight={700}
            marginTop={theme.spacing(1)}    
            gutterBottom
            data-aos='fade-up'
          >
            Languajes
          </Typography>
          <Typography
            variant='h5'
            color={theme.palette.text.secondary}
            align='center'
            marginTop={4}
            marginBottom={6}
            data-aos='fade-up'
          >
            All languajes and levels
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent='center'>
          {languaje.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                display='block'
                width={1}
                height={1}
                borderRadius={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': { transform: 'translateY(-4px)' },
                }}
                data-aos='fade-up'
              >
                <Card sx={{ maxWidth: 345 }} data-aos='fade-up'>
                  <CardContent>
                    <Typography variant='h6' gutterBottom>
                      {item.languaje}
                    </Typography>
                    <Typography variant='body1' color='textSecondary'>
                      {item.level}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider />
    </div>
  );
};

export default Languajes;

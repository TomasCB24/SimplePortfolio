import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const Education = () => {
  const theme = useTheme();
  const [education, setEducation] = useState([]);

  const fetchEducation = () => {
    axios
      .get('http://127.0.0.1:8000/education', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setEducation(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  return (
    <div id='education'>
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
            Education
          </Typography>
          <Typography
            variant='h5'
            color={theme.palette.text.secondary}
            align='center'
            marginTop={4}
            marginBottom={6}
            data-aos='fade-up'
          >
            My academic background
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent={'center'}>
          {education.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
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
                <Card
                  variant='outlined'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    alignItems: 'center',
                    p: 2,
                  }}
                >
                  <Avatar
                    alt={item.school}
                    src={item.image}
                    sx={{ width: 100, height: 100, marginBottom: 2 }}
                  />

                  <Box
                    display='flex'
                    flexDirection='column'
                    flexGrow={1}
                    width='100%'
                    justifyContent='space-between'
                  >
                    <Typography
                      variant='h6'
                      gutterBottom
                      align='center'
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        minHeight: '3em',
                      }}
                    >
                      {item.degree}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      align='center'
                      sx={{
                        fontSize: '0.875rem',
                        marginBottom: 1,
                        minHeight: '2em',
                      }}
                    >
                      {item.school}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      align='center'
                      sx={{ fontSize: '0.875rem', minHeight: '2em' }}
                    >
                      {item.years}
                    </Typography>
                  </Box>
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

export default Education;

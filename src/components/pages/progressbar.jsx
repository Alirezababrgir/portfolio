import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { Slide } from '@mui/material';
export const CircularProgressWithLabel = (prop) => {

  const [load, setload] = useState(false);
  useEffect(() => {
      setload(true);      //Mount
      return () => {
          setload(false); //unMount
      }
  }, []);

  return (
    <Slide direction="down" in={load} style={{ transitionDelay: load ? '1100ms' : '0ms' }}>
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...prop} color={prop.c} sx={{opacity:"80%"}}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(prop.value)}%`}
        </Typography>
      </Box>
    </Box>
    </Slide>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export const CircularWithValueLabel = ({ value,c }) => {
  const [progress, setProgress] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= value ? value : prevProgress +1));
    },7);
    return () => {
      clearInterval(timer);
    };
  });

  return <CircularProgressWithLabel value={progress} c={c}/>;
}
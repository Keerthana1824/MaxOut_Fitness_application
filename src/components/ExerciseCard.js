import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row" gap={"40px"} mb="25px">
      <Button sx={{ ml: '21px', mt: "25px", color: '#000',border:"1px solid #fff", background: '#FFA9A9', fontSize: '18px', borderRadius: '10px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px',  mt: "25px", color: '#000', border:"1px solid #fff", background: '#FCC757', fontSize: '18px', borderRadius: '10px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px"  color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="50px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
  
);

export default ExerciseCard;
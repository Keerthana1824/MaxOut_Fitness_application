import React, { useEffect, useState } from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises)
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({top: 1800, behavior: "smooth"})
  }
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);
  return (  
    <Box
      id="exercises"
      sx={{ mt: { lg: '110px' } }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="156px" mt={"20px"}>
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="150px" alignItems="center">
        {
          exercises.length > 9 && (
            <Pagination 
              
              color="standard"
              shape="rounded"
              variant='outlined'
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              size='large'
              page={currentPage}
              onChange={paginate}
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#000", // Change the default text color
                },
                "& .Mui-selected": {
                  backgroundColor: "#FA8A85", // Change the background color of the selected page
                  color: "#000", // Change the text color of the selected page
                },
                "& .MuiPaginationItem-outlined": {
                  border: "1px solid #9E221D", // Change the border color of the outlined pagination items
                },
                "& .MuiPaginationItem-outlinedPrimary.Mui-selected": {
                  "&:hover": {
                    backgroundColor: "#F33031", // Change the hover background color of the selected page
                  },
                },
              }} 
            />
          )
        }

      </Stack>
    </Box>
  );
};


export default Exercises;
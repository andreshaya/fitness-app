import React from 'react'
import { Typography, Box, Stack } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollBar'
import Loader from '../components/Loader'

const SimilarExercises = ({ targetExercises, equipmentExercises}) => {
  return (
    <Box sx={{ mt: {lg: '100px', xs: '50px'}}}>
      <Typography variant='h5' mb={3}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}}>
        {targetExercises.length ? <HorizontalScrollbar data={targetExercises} /> : <Loader />}
      </Stack>

      <Typography variant='h5' mb={3}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const ToDo = () => {
  const [task,setTask]=useState("");
  const [data,setData]=useState("");
  return (
    <Stack direction="row" spacing={2}

    
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >

    <TextField id="outlined-basic" label="Enter Task" variant="outlined" onChange={(event)=>{setTask(event.target.value)}}/>
    </Box>
    <Button variant="contained">Submit</Button>
    </Stack>
  )
}

export default ToDo
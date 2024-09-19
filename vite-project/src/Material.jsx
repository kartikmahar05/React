import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
      noValidate
      autoComplete="off"
    >
    <Stack direction="row" spacing={5} width={100}  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <Button variant="contained">Click here</Button>
    </Stack>
      
    </Box>
  );
}

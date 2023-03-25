import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SMTextField({id, label, variant, onChange, InputProps}) {
  return (
      <TextField 
      id={id?id:"outlined-basic"} 
      label={label?label:"Input Field"} 
      variant={variant?variant:"outlined"} 
      InputProps={InputProps?InputProps:null}
      onChange={(e)=> onChange(e)}
      />
      //<TextField id="outlined-basic" label="Outlined" variant="outlined" InputProps={InputProps}/>
    //   <TextField id="filled-basic" label="Filled" variant="filled" />
    //   <TextField id="standard-basic" label="Standard" variant="standard" />
  );
}
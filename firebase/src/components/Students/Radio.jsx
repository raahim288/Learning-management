import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography } from '@mui/material';

export default function RowRadioButtonsGroup({main,one,two,three}) {
  return (
    <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:'white'}}>{main}</FormLabel>
        <RadioGroup sx={{
          '& .MuiRadio-root':{
            color:'white'
          },
      '& .MuiFormControlLabel-label':{
        color:'white'
      },
      '& .MuiRadio-root': {
        color: 'white', 
        '&.Mui-checked': {
          color: 'white' 
        }
        
        }}}
        
          
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        row
        >
        
        <FormControlLabel value="female" control={<Radio />}   label={one} />
        <FormControlLabel value="male" control={<Radio />} label={two} />
        <FormControlLabel value="other" control={<Radio />} label={three} />
       
      </RadioGroup>
    </FormControl>
  );
}

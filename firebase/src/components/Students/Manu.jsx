import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CollapsibleButton = ({ name, first, second, linkone, linktwo }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ color: 'white', backgroundColor: 'black', borderRadius: '2rem' }}>
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        sx={{ 
          padding: '10px 10px', 
          width: '14rem', 
          borderRadius: '2rem',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: 'darkgray',
          }
        }}
      >
        <span style={{ marginTop: 2 }}>
          <EmailIcon />
        </span>
        <span style={{ paddingLeft: '2rem', marginTop: 2, flexGrow: 1 }}>
          {name}
        </span>
        <span style={{ paddingLeft: '1rem', marginTop: 2 }}>
          <ArrowDropDownIcon />
        </span>
      </Button>
      <Menu
        id="student-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
      >
        <MenuItem onClick={() => { handleClose(); linkone(); }}>
          {first}
        </MenuItem>
        <MenuItem onClick={() => { handleClose(); linktwo(); }}>
          {second}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CollapsibleButton;

import { Box, Button, Typography } from "@mui/material";

const MuiPage = () => {
  return <>
    <Box 
      sx={{ 
        width: '100%', 
        height: '32px', 
        boxSizing: 'border-box',
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      Mui
    </Box>
    <Box 
      sx={{ 
        width: '100%', 
        height: '32px', 
        boxSizing: 'border-box', 
        flexDirection: 'column',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <Button variant="contained">
      </Button>
      <Typography variant="body1" 
        sx={{ 
          width: '100%', 
          textOverflow: 'ellipsis', 
          overflow: 'hidden', 
          whiteSpace: 'nowrap' 
        }}
      >
        ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis
      </Typography>
      
    </Box>
  </>;
};

export default MuiPage;

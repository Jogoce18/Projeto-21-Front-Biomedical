import { Box } from '@mui/material';
import Logo from '../Logo/Logo';

const style = {
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: '#eee',

    width: '140%',
    height: '100vh',
    marginLeft: '-30px',
    backgroundColor: '#00a6a6',
    borderRadius: '0 15px 15px 0',
  },
  text:{
    fontStyle: 'italic'
  }
  };

function SideLogo() {
  return (
    <Box component="form" sx={style.form}>
      <Logo/>
      <Box component='h3' sx={style.text}>A modern approach to medical equipment maintenance control!</Box>
    </Box>
  );
}

export default SideLogo;
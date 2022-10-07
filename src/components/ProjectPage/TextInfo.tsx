import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode
}

export default function TextInfo({ children }: Props) {
  return (
    <Box component='div' sx={style}>
      {children}
    </Box>
      
  );
}
const style = {
  width: '100%',
  height: 'auto',
  padding: '5px 15px',
  borderRadius: '5px',
  border: 'none',
  margin: '0 0 10px 0',

  bgcolor: '#e5f6f6',
  color: 'black',

  ':focus': {
    outline: '2px solid #343434',
  }
};
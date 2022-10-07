import { Box } from '@mui/material';
import useAuth from '../../hooks/useAuth';

interface Props {
  children: React.ReactNode
}

export default function Header({ children }: Props) {
  
  const { auth } = useAuth();
  
  return(
    <>
      <Box component="h1" sx={style}>
        {children}
      </Box>
    </>
  );
}
const style = {
  height: '60px',
	width: '100%',
  position: 'fixed',
	top: '0',
	left: '0',
  display: 'flex',
  backgroundColor: '#343434',
  margin: '0 auto',
  
};
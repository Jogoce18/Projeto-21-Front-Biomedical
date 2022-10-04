import { Button } from '@mui/material';

interface Props {
  children: React.ReactNode,
  onCLick: React.FormEvent
}

export default function FormButton({children, onCLick}: Props) {
  return(
    <Button sx={{
      display: 'flex',
      flexDirection: 'row',
      fontFamily: 'Roboto',
      fontSize: '14px',
      backgroundColor: '#a60000',
      width: '100%',
      borderRadius: '10px'
    }}
      variant="contained"
    />
   
  );
}
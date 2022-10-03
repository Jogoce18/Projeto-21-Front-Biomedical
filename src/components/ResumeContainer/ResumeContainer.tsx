import { Box } from '@mui/material';

const styles = {
    width: '27.5%',
    paddingBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'end',
    top:'70px'
};

interface Props {
  children: React.ReactNode
}

export default function ResumeContainer({ children }: Props) {
  return (
    <Box component='div' sx={styles} >
      {children}
    </Box>
  );
}
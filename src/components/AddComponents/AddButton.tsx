import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import logoGo from '../../assets/icons8-criar-ordem-50.png';

export default function AddButton() {

  const navigate = useNavigate();

  return (
    <Box component='div' sx={styles.container} onClick={() => navigate('/add')}>
      <Box component='h4' sx={styles.text}>Adicionar</Box>
      <Box component='div' sx={styles.iconContainer}>
        <img src={logoGo} width='15px' />
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    ':hover': {
      cursor: 'pointer'
    }
  },
  text: {
    color: '#fff',
    fontSize: '15px',
    fontWeight: 300
  },
  iconContainer: {
    width: '40px',
    height: '40px',
    bgcolor: '#a60000',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
};

import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo1.png';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100px',
  color: '#fff',
  fontSize: '25px',
  fontWeight: 700,

};

export default function MiniLogo() {

  const navigate = useNavigate();

  return (
    <Box component="div" sx={style} onClick={() => navigate('/home')} >
      <Img
        src={logo}
      />
    </Box>
  );
}

const Img = styled.img`

  cursor: pointer;
  width: 80%;
  margin-top: 180px;
`;

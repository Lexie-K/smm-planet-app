import React from 'react';
import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './styledLoginForm.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const style = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
    minWidth: '320px',
    height: '33px',

    '&.Mui-focused fieldset': {
      borderColor: 'rgba(255, 54, 0, 0.7)',
    },  
  }
};
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF3600',
      contrastText: '#FFFFF',
    },
  },
});

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLog = () => {
    handleLogin(email, password);
  };

  return (
    <div>
      <Box className="styledForm">
        <Typography sx={{fontSize:'2rem', color:'#FF3600',fontWeight:700,fontFamily:'Roboto', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>Вход</Typography>
        <form className="styledFormSize">
          <TextField
            
            
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="E-mail"
            name="email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            sx={style}
            variant="outlined"
          />
          <br />

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            placeholder="пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            sx={style}
          />
          <ThemeProvider theme={theme}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleLog}
              sx={{
                color: 'white',
                backgroundColor: 'rgba(255, 54, 0, 0.8)',
                borderRadius: '20px',
                textTransform: 'none',
                fontSize: '1.125rem',
                fontFamily: 'Roboto',
                fontWeight: 700,
                padding: '8px 42px 9px 41px',
                width: '160px',
                height: '40px'
              }}
            >
              Войти
            </Button>
          </ThemeProvider>
        </form>
        <Box sx={{display:'flex', gap:8, alignItems:'baseline'}}>
        <Typography component="p" sx={{ whiteSpace:'nowrap',fontSize: '1.125rem',fontFamily: 'Roboto', color: '#0D0D0D'
}}>
          Забыли пароль?
        </Typography>
        <Link color="inherit" href="/*" >{`Восстановить`}
          
          
        </Link>
        </Box>
       </Box>
      
    </div>
  );
};

export default LoginForm;

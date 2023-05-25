import React , {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import './styledModal.scss'
import { useSelector, useDispatch } from 'react-redux';

import { closeModal } from '../../store/slices/modalSlice';
import { changePass } from '../../store/slices/formChangePassSlice';

const style = {
  position: 'absolute',
  zIndex: 10,
  display: 'flex',
  justifyContent: 'center',
  // alignItems: 'right',
  flexDirection: 'column',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '100%',
  maxHeight: '100%',
  bgcolor: 'white',
  boxShadow: 100,
  border: '1px solid rgb(255, 54, 0);',
  borderRadius: '10px',
  overflow: 'auto',
  '@media(max-width:320px)': {
    minWidth: '320px',
    minHeight: '30px',
  },
};

const ModalChangePass = () => {
  const [old_password, setOldPassword] = useState('');
  
  const [new_password, setNewPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  
  const [new_password_confirm, setNewPasswordConfirm] = useState('');
  

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleSendNewPass = async (e) => {
    e.preventDefault();
    dispatch(changePass({ old_password, new_password, new_password_confirm }));
    
  };

  return (
    <div>
     
        <Box sx={style}>
          
        <div onClick={handleClose} className="closeBtnModal">
            {' '}
            <CloseIcon
              fontSize="small"
              stroke="rgba(229, 229, 229, 1)"
              strokeWidth="1"
            />{' '}
          </div>
          <p className="styledChangePassTitle">Сменить пароль</p>
          <form className="styledLoginFormSize" >
            <input
              id="old_password"
              placeholder="старый пароль"
              type="password"
              name="old_password"
              value={old_password}
              onChange={e => setOldPassword(e.target.value)}
              className="styledLogininput"
              required
            />

            <input
              name="new_password"
              placeholder="новый пароль"
              type="password"
              id="new_password"
              value={new_password}
              onChange={e => setNewPassword(e.target.value)}
              className="styledLogininput"
              required
            />
             <input
              name="new_password"
              placeholder="новый пароль"
              type="password"
              id="new_password_confirm"
              value={new_password_confirm}
              onChange={e => setNewPasswordConfirm(e.target.value)}
              className="styledLogininput"
              required
            />

            <button className="styledNewPassBtn" onClick={handleSendNewPass}>Сменить</button>
  
          </form>
        </Box>
     
    </div>
  );
};
export default ModalChangePass;

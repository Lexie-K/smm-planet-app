import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import './styledModal.scss';
import { useDispatch } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import { closeModal } from '../../store/slices/modalSlice';
import { changePass } from '../../store/slices/formChangePassSlice';

const style = {
  position: 'absolute',
  zIndex: 10,
  display: 'flex',
  justifyContent: 'center',
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

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const ModalChangePass = () => {
  const [old_password, setOldPassword] = useState('');

  const [new_password, setNewPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [new_password_confirm, setNewPasswordConfirm] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    const resultpwd = PWD_REGEX.test(new_password);
    setValidPassword(resultpwd);
    const match = new_password === new_password_confirm;
    setValidMatch(match);
  }, [new_password, new_password_confirm]);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleSendNewPass = async e => {
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
        <form className="styledLoginFormSize">
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
          <label>
            <span className={validPassword ? 'valid' : 'hide'}>
              <CheckIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>
            <span
              className={validPassword || !new_password ? 'hide' : 'invalid'}
            >
              <ClearIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>
            <input
              name="new_password"
              placeholder="новый пароль"
              type="password"
              id="new_password"
              value={new_password}
              onChange={e => setNewPassword(e.target.value)}
              className="styledLogininput"
              required
              aria-invalid={validPassword ? 'false' : 'true'}
              aria-describedby="pwdnote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
          </label>
          <p
            id="pwdnote"
            className={
              passwordFocus && !validPassword ? 'instructions' : 'offscreen'
            }
          >
            Обязательное поле. От 8 до 24 символов. Пароль должен содержать
            заглавные и строчные буквы, цифру и специальный символ.
          </p>
          <label>
            <span
              className={validMatch && new_password_confirm ? 'valid' : 'hide'}
            >
              <CheckIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>
            <span
              className={
                validPassword || !new_password_confirm ? 'hide' : 'invalid'
              }
            >
              <ClearIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>
            <input
              name="new_password"
              placeholder="новый пароль"
              type="password"
              id="new_password_confirm"
              value={new_password_confirm}
              onChange={e => setNewPasswordConfirm(e.target.value)}
              className="styledLogininput"
              required
              aria-invalid={validMatch ? 'false' : 'true'}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
          </label>
          <p
            id="confirm_password"
            className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}
          >
            Пароль должен совпадать
          </p>
          <button
            className="styledNewPassBtn"
            onClick={handleSendNewPass}
            disabled={
              !old_password || !validPassword || !validMatch ? true : false
            }
          >
            Сменить
          </button>
        </form>
      </Box>
    </div>
  );
};
export default ModalChangePass;

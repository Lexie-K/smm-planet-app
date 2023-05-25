import React, { useState, useEffect } from 'react';
import { Box, Button, Modal } from '@mui/material';
import './StyledBloggerTable.scss';
import NavTable from '../NavTableSection/NavTable';
import { getUserData } from '../../store/slices/getUserInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setAccountInfo } from '../../store/slices/getUserInfoSlice';
import axios from 'axios';
import { openModal, closeModal } from '../../store/slices/modalSlice';
import CloseIcon from '@mui/icons-material/Close';
import ModalWindow from '../Modal/ModalChangePass';
import ModalChangePass from '../Modal/ModalChangePass';

const BloggerMainTable = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
    maxHeight: '100%',
    bgcolor: 'rgba(229, 229, 229, 1)',
    boxShadow: 100,
    border: 'none',
    borderRadius: 'none',
    fontFamily: '--montserrat-font',
    overflow: 'auto',
    '@media(max-width:320px)': {
      minWidth: '320px',
      minHeight: '30px',
    },
  };

  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [instaname, setInstaname] = useState('');
  const [tiktokname, setTiktokname] = useState('');
 

  const user = useSelector(state => state.log.username);
  const { isOpen } = useSelector(state => state.modal);
  const fetchData = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_ENDPOINT}/api/account/${user}`
    );
    setEmail(data.email);
    setUsername(data.username);
    setFirstName(data.first_name);
    setLastName(data.last_name);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dispatch = useDispatch();

  const handleDisabled = () => {
    setDisabled(!disabled);
  };
  const handleSendAccountInfo = async (e) => {
    e.preventDefault();
    dispatch(setAccountInfo({ email, first_name, last_name }));
    dispatch(getUserData({ username, email, first_name, last_name }));
  };

  // useEffect(()=> {

  // },[])

  // const handleClose = () => {
  //   dispatch(closeModal());

  // };

  const handleOpen = () => {
    dispatch(openModal());
  };

  return (
    <div>
      <Box
        component="form"
        autoComplete="off"
        sx={{
          padding: {
            xs: '1.688rem 0.625rem',
            md: '2.5rem 2.375rem',
            lg: '2.5rem 2.375rem',
          },
          background: 'rgba(252, 225, 200, 0.65)',
          boxShadow: '5px 5px 7px rgb(0 0 0 / 25%)',
          borderRadius: '30px',
        }}
      >
        <NavTable handleDisabled={handleDisabled} />
        <button className='styledBtn' onClick={handleSendAccountInfo}>Сохранить Изменения</button>
        <div class="styledBloggerContainer">
          <p className="styledLabelInput">Email</p>
          <div class="cell">
            <input
              type="text"
              className="styledInputForm"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={disabled}
            />
          </div>
          <p className="styledLabelInput">Username</p>
          <div class="cell">
            <input
              type="text"
              className="styledInputForm"
              value={username}
              onChange={e => setUsername(e.target.value)}
              disabled={disabled}
            />
          </div>
          <p className="styledLabelInput">Имя</p>
          <div class="cell">
            <input
              type="text"
              className="styledInputForm"
              value={first_name}
              onChange={e => setFirstName(e.target.value)}
              disabled={disabled}
            />
          </div>
          <p className="styledLabelInput">Фамилия</p>
          <div class="cell">
            <input
              type="text"
              className="styledInputForm"
              value={last_name}
              onChange={e => setLastName(e.target.value)}
              disabled={disabled}
            />
          </div>
          <p className="styledLabelInput">Instagram</p>
          <div class="cell">
            <input
              type="text"
              placeholder="nickname"
              className="styledInputForm"
              disabled={disabled}
              value={instaname}
              onChange={e => setInstaname(e.target.value)}
            />
            <input
              type="text"
              placeholder="цена за пост"
              className="styledInputCost"
              disabled={disabled}
            />
            <button className="styledBtn">
              Разрешить доступ к статистике аккаунта
            </button>
          </div>
          <p className="styledLabelInput">Tiktok</p>
          <div class="cell">
            <input
              type="text"
              placeholder="nickname"
              className="styledInputForm"
              disabled={disabled}
              value={tiktokname}
              onChange={e => setTiktokname(e.target.value)}
            />
            <input
              type="text"
              placeholder="цена за пост"
              className="styledInputCost"
              disabled={disabled}
            />
            <button className="styledBtn">
              Разрешить доступ к статистике аккаунта
            </button>
          </div>
        </div>
        <div>
          <button className="styledBtn" onClick={handleOpen}>Сменить пароль</button>
          {isOpen && <ModalChangePass />}
        </div>
      </Box>
    </div>
  );
};

export default BloggerMainTable;

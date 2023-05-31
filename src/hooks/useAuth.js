import {useSelector } from 'react-redux';

export function useAuth() {
  const username = useSelector(state => state.log.username);
  return {
    isAuth: username,
   
    // id,
  }
}
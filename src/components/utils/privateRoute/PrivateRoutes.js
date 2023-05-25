import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children, ...rest }) => {
  const getToken = localStorage.getItem('access');

  
  return getToken ? <Outlet />  : <Navigate to="/#/signuppage" /> ;
};

export default PrivateRoutes;

import axios from 'axios';

const baseURL = `${process.env.REACT_APP_SERVER_ENDPOINT}/api/`;
// const navigate = useNavigate();
let accessToken = localStorage.getItem('access');

const CustomAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${accessToken}`
  },
});

CustomAxios.interceptors.request.use(
  req => {
    let acc = localStorage.getItem('access');
    req.headers[' Authorization'] = `Bearer ${acc}`;
    return req;
  },
  err => {
    return Promise.reject(err);
  }
);
CustomAxios.interceptors.response.use(
  res => {
    return res;
  },
  async err => {
    const originalReq = err.config;
    const status = err.response ? err.response.status : null;
    if (status === 401) {
      return await axios
        .post(`${baseURL}account/token/refresh/`, {
          refresh: localStorage.getItem('refresh'),
        })
        .then(response => {
          localStorage.setItem('access', response.data.access);
          // localStorage.setItem('refresh', response.data.refresh);
      

          return CustomAxios(originalReq);
        })
        .catch(err => {
          localStorage.removeItem('access');
          localStorage.removeItem('refresh');
          window.location.replace('/#/loginpage');
        });
    }

    return Promise.resolve(err);
  }
);
export default CustomAxios;

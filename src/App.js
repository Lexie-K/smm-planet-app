import { Routes, Route, HashRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PageNotFound from './pages/PageNotFound';
import BloggerAccountPage from './pages/BloggerAccountPage';
import AdAccountPage from './pages/AdAccountPage';
import ContactsPage from './pages/ContactsPage';
import AdminPage from './pages/AdminPage';
import CheckBoxTablePage from './pages/CheckBoxTablePage';
import AcceptancePage from './pages/AcceptancePage';
import ChatPage from './pages/ChatPage';
import Search from './pages/Search';
import FinanceBloggerAccountPage from './pages/FinanceBloggerAccountPage';
import OrdersBloggerAccountPage from './pages/OrdersBloggerAccountPage';
import OrdersAdAccountPage from './pages/OrdersAdAccountPage';
import CreateOrder from './pages/CreateOrder';
import FinanceAdAccountPage from './pages/FinanceAdAccountPage';
import PrivateRoutes from './components/utils/privateRoute/PrivateRoutes';

function App() {
  return (

    <HashRouter basename="/">
      <Routes>
        <Route element={<PrivateRoutes/>}> 
          <Route path="/account_blogger" element={<BloggerAccountPage />} />
          <Route path="/finance_blogger" element={<FinanceBloggerAccountPage />} />
          <Route path="/orders_blogger" element={<OrdersBloggerAccountPage />} />
          <Route path="/adaccountpage" element={<AdAccountPage />} />
          <Route path="/adaccountpage/finance" element={<FinanceAdAccountPage />} />
          <Route path="/adaccountpage/orders" element={<OrdersAdAccountPage />} />
          <Route path="/adaccountpage/createorder" element={<CreateOrder />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/checkboxpage" element={<CheckBoxTablePage />} />
          <Route path="/acceptancepage" element={<AcceptancePage />} />
          <Route path="/chatpage" element={<ChatPage />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignUpPage />} />
        <Route path="/contactspage" element={<ContactsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

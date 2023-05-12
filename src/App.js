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

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignUpPage />} />
        <Route path="/account" element={<BloggerAccountPage />} />
        <Route
          path="/account/finance"
          element={<FinanceBloggerAccountPage />}
        />
        <Route path="/account/orders" element={<OrdersBloggerAccountPage />} />
        <Route path="/adaccountpage" element={<AdAccountPage />} />
        <Route
          path="/adaccountpage/finance"
          element={<FinanceAdAccountPage />}
        />
        <Route path="/adaccountpage/orders" element={<OrdersAdAccountPage />} />
        <Route path="/adaccountpage/createorder" element={<CreateOrder />} />
        <Route path="/contactspage" element={<ContactsPage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/checkboxpage" element={<CheckBoxTablePage />} />
        <Route path="/acceptancepage" element={<AcceptancePage />} />
        <Route path="/chatpage" element={<ChatPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

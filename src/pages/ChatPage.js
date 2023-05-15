import React from 'react';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import ChatTable from '../components/ChatPage/ChatTable';

const ChatPage = () => {
  return (
    <>
      <SearchBar />
      <Filters />
      <div className='styledAllContainer'>
        <ChatTable />
        <footer className="footer">
          <LowSection />
        </footer>
      </div>
    </>
  );
};

export default ChatPage;

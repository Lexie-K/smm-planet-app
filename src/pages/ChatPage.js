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
        <div className="footer">
          <LowSection />
        </div>
      </div>
    </>
  );
};

export default ChatPage;

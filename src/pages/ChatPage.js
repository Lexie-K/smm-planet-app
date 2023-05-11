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
      <ChatTable />
      <div className="styledAccountfooter">
        <LowSection />
      </div>
    </>
  );
};

export default ChatPage;

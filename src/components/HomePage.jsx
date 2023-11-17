import React from 'react';
import Header from './Header';
import EmployeeList from './EmployeeList';
import SearchBar from './SearchBar';

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default HomePage;

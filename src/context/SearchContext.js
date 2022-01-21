import React, { useContext, useState } from 'react';

const SearchContext = React.createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const value = { search, setSearch };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export { SearchProvider, useSearch };

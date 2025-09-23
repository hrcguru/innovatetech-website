import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import UserList from './components/UserList/UserList';
import './styles/App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (err) {
        setError('Failed to load users. Please try again later.');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <div className="header">
        <h1>👥 User Explorer</h1>
        <p>Discover and search through our user database</p>
      </div>

      <SearchBar 
        searchQuery={searchQuery} 
        onSearchChange={setSearchQuery} 
      />

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <h2>Loading Users...</h2>
          <p>Please wait while we fetch the user data</p>
        </div>
      )}

      {error && (
        <div className="error">
          <h2>⚠️ Error</h2>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          {filteredUsers.length === 0 ? (
            <div className="no-results">
              <h2>🔍 No Users Found</h2>
              <p>No users match your search for "{searchQuery}"</p>
            </div>
          ) : (
            <>
              <div style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>
                Showing {filteredUsers.length} of {users.length} users
                {searchQuery && ` for "${searchQuery}"`}
              </div>
              <UserList users={filteredUsers} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
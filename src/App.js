import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Home from './pages/Home';
import ProfileList from './pages/ProfileList';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';

const API_URL = "http://localhost:8083/api/members";

const App = () => {
  const [members, setMembers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  
  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        setMembers(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  const addMember = async (member) => {
  try {
    const res = await axios.post(API_URL, member);
    setMembers(prev => [...prev, res.data]);
    return res.data; 
  } catch (err) {  
    console.log(err);
  }
};


  const deleteMember = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setMembers(prev => prev.filter(m => m.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const toggleLike = async (id) => {
    try {
      const res = await axios.put(`${API_URL}/${id}/like`);
      setMembers(prev => prev.map(m => m.id === id ? res.data : m));
    } catch (err) {
      console.log(err);
    }
  };

  const toggleFollow = async (id) => {
    try {
      const res = await axios.put(`${API_URL}/${id}/follow`);
      setMembers(prev => prev.map(m => m.id === id ? res.data : m));
    } catch (err) {
      console.log(err);
    }
  };

  if (!loaded) return <p>Loading...</p>; 
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home
                members={members}
                addMember={addMember}
                deleteMember={deleteMember}
                toggleLike={toggleLike}
                toggleFollow={toggleFollow}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profiles"
          element={
            <ProtectedRoute>
              <ProfileList
                members={members}
                onDelete={deleteMember}
                onLike={toggleLike}
                onFollow={toggleFollow}
              />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import UserProfile from './pages/UserProfile';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { auth } from './firebase';
import Pricing from './components/Pricing';
import Home from './pages/Home';
import Events from './components/Events';
import Footer from './components/Footer';
import Loading from './components/Loading'; // Import the Loading component

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <Loading />; // Use the Loading component

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/signup" />} />
        <Route path="/profile" element={user ? <UserProfile /> : <Navigate to="/signup" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav>
      <h2>To-Do App</h2>
      {isAuthenticated ? (
        <button onClick={() => { dispatch(logout()); navigate('/login'); }}>Logout</button>
      ) : null}
    </nav>
  );
};

export default Navbar;

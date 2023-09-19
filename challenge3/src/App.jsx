import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/root';
import Home from './pages/home';
import Profile from './pages/Profile';
import Login from './pages/login';
import Register from './pages/register';


const router = createBrowserRouter([
  {
    path: '/user',
    element: <RootLayout />,
    children: [
      { path: '/user/home', element: <Home />},
      { path: '/user/profile', element: <Profile />}
    ],
  },
 { path: '/', element: <Login />},
 { path: '/register', element: <Register />}
]);

function App() {
   return <RouterProvider router={router} />
}

export default App;

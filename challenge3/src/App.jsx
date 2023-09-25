import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/root';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/login';
import Register from './pages/register';
import Marketplace from './pages/Marketplace';


const router = createBrowserRouter([
  {
    path: '/:userId',
    element: <RootLayout />,
    children: [
      { path: '/:userId/home', element: <Home />},
      { path: '/:userId/profile', element: <Profile />},
      { path: '/:userId/marketplace', element: <Marketplace />}
    ],
  },
 { path: '/', element: <Login />},
 { path: '/register', element: <Register />}
]);

function App() {
   return (
       <RouterProvider router={router} />
   );
}

export default App;

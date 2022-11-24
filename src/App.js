import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Routes/Router';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="w-11/12 mx-auto">
    <RouterProvider router={Router} >

    </RouterProvider>
    <Toaster/>
    </div>
  );
}

export default App;

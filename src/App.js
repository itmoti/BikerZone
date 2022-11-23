import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Routes/Router';

function App() {
  return (
    <div className="w-11/12 mx-auto">
    <RouterProvider router={Router} >

    </RouterProvider>
    </div>
  );
}

export default App;

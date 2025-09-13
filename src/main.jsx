import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Portofolio from './Portofolio.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import { LanguageProvider } from "./components/LanguageContext.jsx";
import {createHashRouter, RouterProvider} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Not Found</div>,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <div>Not Found</div>,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <div>Not Found</div>,
  },
  {
    path: "/portofolio",
    element: <Portofolio />,
    errorElement: <div>Not Found</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
)

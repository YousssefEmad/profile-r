import { useState } from 'react'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout';
import Home from './Component/Home';
import About from './Component/About';
import Gallery from './Component/Gallery/Gallery';
import Error404 from './Component/Error404';
import Contact from './Component/Contact';



let routpadge = createBrowserRouter(
  [
    {path : '' , element : <Layout/>, children : [
      {index: true , element : <Home />},
      {path : 'home' , element : <Home />},
      {path : 'about' , element : <About/>},
      {path : 'gallery' , element : <Gallery/>},
      {path : 'contact' , element : <Contact/>},
      {path : '*' , element: <Error404/>}
    ]}
  ]
) // to define routes
function App() {

  return (
    <>
      <RouterProvider router={routpadge}></RouterProvider>
    </>
  )
}

export default App

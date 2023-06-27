import { useState } from 'react'
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Home />}/>
  )
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App

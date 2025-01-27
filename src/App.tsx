import { RouterProvider } from 'react-router-dom'
import { createRouter } from './router'
import 'swiper/swiper-bundle.css'

function App() {

  return  <RouterProvider router={createRouter()} />
  
}

export default App

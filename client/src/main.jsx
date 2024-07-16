import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBooks from './pages/SearchBooks'
import SavedBooks from './pages/SavedBooks'

let router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <h1 className='display-2'>Wrong Page - try again!</h1>,
    children: [
      {
        index: true,
        element: <SearchBooks/>
      }, {
        path: '/saved',
        element: <SavedBooks/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)

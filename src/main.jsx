import './main.css'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './routes/index.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Root, { rootLoader, rootAction } from './routes/Root.jsx'
import Contact, { contactLoader, contactAction } from './routes/Contact.jsx'
import EditContact, { editAction } from './routes/Edit.jsx'
import { destroyAction } from './routes/Destroy.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     action: rootAction,
//     children: [{
//       errorElement: <ErrorPage />,
//       children: [
//         { index: true, element: <Index /> },
//         {
//           path: 'contacts/:contactId',
//           element: <Contact />,
//           loader: contactLoader,
//           action: contactAction
//         },
//         {
//           path: 'contacts/:contactId/edit',
//           element: <EditContact />,
//           loader: contactLoader,
//           action: editAction
//         },
//         {
//           path: 'contacts/:contactId/destroy',
//           action: destroyAction,
//           // errorElement: <div>Oops! There was an error.</div>
//         }
//       ]
//     }]
//   }
// ])


import Dashboard from './pages/dashboard/index.jsx'
import Main from './pages/main/index.jsx'
import Login from './pages/login/index.jsx'
import FallBack from './pages/fallback/index.jsx'
const router2 = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    
    children: [{
      index: true,
      path: 'main',
      element: <Main />
    }]
  },
  {
    path: "/login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router2} fallbackElement={<FallBack />}></RouterProvider>
  </Provider>
)

// import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './main.css'
// import App from './App.jsx'
import Root, { rootLoader, rootAction } from './routes/Root.jsx'
import Index from './routes/index.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Contact, { contactLoader, contactAction } from './routes/Contact.jsx'
import EditContact, { editAction } from './routes/Edit.jsx'
import { destroyAction } from './routes/Destroy.jsx'


// import HelloWorld from './components/HelloWorld/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [{
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Index /> },
        {
          path: 'contacts/:contactId',
          element: <Contact />,
          loader: contactLoader,
          action: contactAction
        },
        {
          path: 'contacts/:contactId/edit',
          element: <EditContact />,
          loader: contactLoader,
          action: editAction
        },
        {
          path: 'contacts/:contactId/destroy',
          action: destroyAction,
          // errorElement: <div>Oops! There was an error.</div>
        }
      ]
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
  // <HelloWorld />
  // </React.StrictMode>
)

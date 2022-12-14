import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

// dev-v7t2mes0.us.auth0.com
//6hPo1l7T6w7QIpf1OrgDZtbyoBSCaZmd

ReactDOM.render(
  <Auth0Provider 
         domain='dev-v7t2mes0.us.auth0.com'
         clientId='6hPo1l7T6w7QIpf1OrgDZtbyoBSCaZmd'
         redirectUri= {window.location.origin}
         casheLocation= "localStorage"
    >
      <UserProvider>
        
        <ProductsProvider>
          <FilterProvider> 
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
        
      </UserProvider>
    </Auth0Provider>
    
    , document.getElementById('root'))

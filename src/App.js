import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

const App = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
      {
        isAuthenticated
          ?
          <div>
            <div>
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
            <button style={{ padding: '15px', backgroundColor: 'purple', color: 'white', fontSize: '20px', borderRadius: '5px' }} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
          </div>
          :
          <button style={{ padding: '15px', backgroundColor: 'purple', color: 'white', fontSize: '20px', borderRadius: '5px' }} onClick={() => loginWithRedirect()}>Log In</button>
      }
    </div>
  )
}

export default App
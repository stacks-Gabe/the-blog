import { login, logout, loggedInUserDisplayName } from "../services/authService"

export function SignIn() {
  return <button id = "sign_in_button" onClick={login}>Sign In</button>
}

export function SignOut() {
  return (
    <div id = "greeting">
      Pleasure to see you, {loggedInUserDisplayName()}  
      <button id = "sign_out_button" onClick={logout}>Sign Out</button>
    </div>
  )
}
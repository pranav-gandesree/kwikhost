import GoogleSignInButton from '@/components/ux/GoogleSigninButton'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
      
      <GoogleSignInButton>
              <div className="w-full">
                  Sign in with Google
              </div>
            </GoogleSignInButton>
    </div>
  )
}

export default LoginPage
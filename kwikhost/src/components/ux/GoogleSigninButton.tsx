'use client'

import { FC, ReactNode, useState } from "react"
import { Button } from "../ui/button"
import { signIn } from "next-auth/react"

interface GoogleSignInButtonProps{
    children: ReactNode
}

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({children}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);


    const loginWithGoogle = async () =>{
      try {
        setIsLoading(true)
        signIn("google", {callbackUrl: 'http://localhost:3000/manage'})
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }finally{
        setIsLoading(false)
      }
    } 
  return (
    <Button disabled={isLoading}
    //  className="w-full"

    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300"
    
      onClick={loginWithGoogle}>
      {isLoading && (
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 mr-2 animate-spin"
       >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
       </svg>
      )}
      {children}
    </Button>
  )
}

export default GoogleSignInButton

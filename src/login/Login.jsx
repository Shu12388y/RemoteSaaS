import {useEffect} from 'react'
import { SignIn } from '@clerk/clerk-react'
function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='flex flex-col items-center justify-center p-10 h-full'><SignIn/></div>
  )
}

export default Login
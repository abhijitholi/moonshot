'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,}){
    useEffect(() => {
      console.log("error",error)
    }, [error])

    const retryRequest = () => {
        reset()
    }
    return (

      <div>
      <h2>Something went wrong!</h2>
        <button onClick={retryRequest()}>Try again </button>
        </div>
      )
    }

    
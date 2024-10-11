'use client'
import NextError from 'next/error'
const error = ({error}:{error:Error}) => {
  return (
    <NextError statusCode={500} title={error.message } />
  )
}

export default error

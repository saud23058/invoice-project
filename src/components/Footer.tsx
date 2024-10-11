import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <footer className='mt-6 mb-8'>
      <Container className='flex justify-between'>
        <p className='text-sm'>Invoice App &copy; {new Date().getFullYear()}</p>
        <p className='text-sm'>Created by Saud khan</p>
      </Container>
    </footer>
  )
}

export default Footer

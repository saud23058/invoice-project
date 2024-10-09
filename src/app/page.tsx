import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <main className='flex flex-col justify-center h-screen gap-6 text-center max-w-5xl mx-auto'>
      <h1 className='text-5xl font-bold'>Invoice</h1>
      <p>
      <Button asChild>
        <Link href="/dashboard">Sign In</Link>
      </Button>
      </p>
    </main>
  )
}

export default Home

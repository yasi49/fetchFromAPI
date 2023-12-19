import React from 'react'
import Link from 'next/link'
// import { recToken } from './recToken/route'




export default async function Home() {

  

  return (
    <div className='text-center mt-8 font-serif text-white font-bold bg-gray-700 p-4'>
    <h1>
      ALL BOOKS
    </h1>
    <ul>
      <li>
        <Link href='/books/'>All Books</Link>
      </li>
      <li>
        <Link href='/authenticaion/'>Order a Book</Link>
      </li>
      <li>
        <Link href='/status/'>Get Status</Link>
      </li>
      <li>
        <Link href='/api/'>Get Token</Link>
      </li>
      <li>
        <Link href='/rectoken/'>Token</Link>
      </li>
    </ul>

    
      
    </div>
  )
}

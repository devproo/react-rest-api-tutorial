import { useState, useEffect } from 'react'
import Contact from './Contact'
import useSWR from 'swr'
import { useQuery } from '@tanstack/react-query'

const fetcher = () =>
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())

function App() {
  
   const { isLoading, error, data } = useQuery(['contacts'], fetcher)

    if (isLoading) return <p>Loading</p>
    if (error) return <p>An error occurred</p>


  return (
    <div className='App'>
      {data.map(({ id, name, email, company }) => (
        <Contact
          key={id}
          name={name}
          email={email}
          tagline={company.catchPhrase}
        />
      ))}
    </div>
  )
}

export default App

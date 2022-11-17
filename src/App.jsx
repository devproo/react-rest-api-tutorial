import { useState, useEffect } from 'react'
import Contact from './Contact'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function App() {
  // const { data, error } = useSWR(
  //   'https://jsonplaceholder.typicode.com/users',
  //   fetcher
  // )
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)

   if (error) return <p>An error occurred</p>
   if (!data) return <p>Loading</p>

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

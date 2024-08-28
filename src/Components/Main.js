import React from 'react'
import Home from './Home'
import TagList from './TagList'
import List from './List'
const Main = () => {
  return (
    <div className='main'>
        <Home />
        <TagList />
        <List />
    </div>
  )
}

export default Main
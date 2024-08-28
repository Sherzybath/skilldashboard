import React from 'react'
import Filter from './Filter'
import Notice from './Notice'
const List = () => {
  return (
    <div className='NoticeBoard'>
        <Notice />
        <Filter />
    </div>
  )
}

export default List
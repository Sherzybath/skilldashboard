import React from 'react'
import Nav from "./Nav";
import Main from "./Main";
const MainCont = ({tog}) => {
  return (
    <div className='MainCont'>
        <Nav toggle={tog}/>
        <Main />
    </div>
  )
}

export default MainCont
import React from 'react'

const AsideList = (props) => {
  return (
    <div className='aside__container'>
      <div className='aside__up'>
        <span>{props.number}</span>
        <h3>{props.subtitle}</h3>
      </div>
      <div className='aside__down'>
        <p>{props.text}</p>
      </div>
    </div>

  )
}

export default AsideList;
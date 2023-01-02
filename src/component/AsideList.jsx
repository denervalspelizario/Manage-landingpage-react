import React from 'react'
import '../style/component/AsideList.sass'

const AsideList = (props) => {
  return (
    <section className='aside__container'>
      <div className='aside__up'>
        <span>{props.number}</span>
        <h3>{props.subtitle}</h3>
      </div>
      <div className='aside__down'>
        <p>{props.text}</p>
      </div>
    </section>

  )
}

export default AsideList;
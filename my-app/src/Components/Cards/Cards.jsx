import React from 'react'
import './Cards.css'
import { cardData } from '../../data'

const Cards = () => {
  return (
      <section className='c-wrapper'>
          <div className="c-container">
              {cardData.map((item, idx) => {
                  return (
                      <div className="card">
                          
                          <img src={item.img} alt="" />
                          <div className="content">
                              <span>{item.id}</span>
                              <span>{item.head}</span>
                              <span>{item.body}</span>
                          </div>
                      </div>
                  )
              })}
        </div>
      </section>
  )
}

export default Cards
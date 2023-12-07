import React from 'react'
import './style/mainrightSidebar.css'
import Enter from './Enter'
function MainRightSdebar() {
  return (
    <div className='rightsidebar'>
      <div className='rightsidebar__container'>
        <Enter />
        <div className="basket__conteiner">
          <div className='basket__text__container'>
            <div className="basket__title">Ул. Пушкина, 10б
              <i className="basket__title__icon vbf-chevron-down"></i>
            </div>
            <div className="basket__time">30 минут</div>
          </div>
          <div className="basket__btn">Заказ от 100Р</div>
        </div>
      </div>
    </div>
  )
}

export default MainRightSdebar
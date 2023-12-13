import React from 'react'
import './style/mainrightSidebar.css'
import Enter from './Enter'
import Basket from './Basket'

function MainRightSdebar({ orders, onDelete, onShowItem, item }) {
  let summa = 0
  orders.forEach(el => summa += Number.parseFloat(el.nowPrice))
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
          <div className='basket' >
            {orders.length !== 0 ?
              <div>
                {orders.map(el => (
                  <Basket key={el.id} item={el} onDelete={onDelete} />
                ))}
              </div> : <div>
                <h2 style={{ transform: 'translateY(250px)' }} className='empy__text'>соберите корзину, <br /> а мы все быстро привезем</h2>
              </div >}
          </div>
          <div className='basket__btn__container'>
            <div className="basket__result__conteoner">
              <div className="result__text">Итог</div>
              <div className="result__price">{new Intl.NumberFormat().format(summa)} ₽</div>
            </div>
            <div className="basket__btn">Продолжить</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainRightSdebar
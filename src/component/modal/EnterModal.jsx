import React from 'react'
import '../style/modal/enterModal.css'
function EnterModal(onClose) {

  return (
    <div className='enterModal__container' >
      <div className="enterModal__list">
        <div className="enterModal__item">
          <i className="enter__close  vbf-no" onClick={onClose}></i>
          <div className='enter__btn__container'>
            <div className="enter__phone__btn">Войти по телефону</div>
            <div className="enter__id__btn">Войти по Сбер ID</div>
            <div className="enter__text__container">
              <i className="enter__text__icon vbf-triangle-up"></i>
              <div className="enter__text__title">
                СберСпасибо
              </div>
              <div className="enter__text">
                Войдите по Сбер ID и получайте бонусы при оплате любой картой
              </div>
            </div>
          </div>
        </div>
        <div className="enterModal__item">
          <div className="enter__item">
            <input type="checkbox" className="enter__item__input" />
            <div className="enter__item__text">Получать</div>
            <div className="enter__item__link">предложения об акциях и скидках</div>
          </div>
          <div className="enter__item">
            <input type="checkbox" className="enter__item__input" />
            <div className="enter__item__text">Делиться</div>
            <div className="enter__item__link">данными с партнёрами Самоката</div>
          </div>
          <div className="enter__item">
            <div className="enter__item__text">Продолжая авторизацию, вы соглашаетесь с</div>
            <div className="enter__item__link">политикой конфиденциальностиб,</div>
            <div className="enter__item__link">условиями сервиса</div>
            <div className="enter__item__text">и</div>
            <div className="enter__item__link">условиями продажи товаров</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnterModal
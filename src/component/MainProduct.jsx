import React from 'react'
import './style/mainProduct.css'

import img1 from './photo/Без названия.jpg'
import img2 from './photo/0a1d7c7e-f557-4a44-8e8c-5e8f917f8063.jpg'
import img3 from './photo/d8358541c8e02f19_2200257000008-1.jpg'
function MainProduct() {
  return (
    <div className='mainProduct'>
      <div className='mainProduct__container' >
        <div className="mainProduct__input__container">
          <input type="text" placeholder='Хавка' className="mainProduct__input" />
        </div>
        <div className='mainProduct__content'>
          <div className="mainProdutc__promoCategori__container">
            <div className='mainProduct__promoCategori__item'>
              <div className="mainProduct__promoCategori__text">Заранее на Новый год</div>
              <img src={img1} alt="" />
            </div>
            <div className='mainProduct__promoCategori__item'>
              <div className="mainProduct__promoCategori__text">Все для горячих напитков</div>
              <img src={img1} alt="" />
            </div>
            <div className='mainProduct__promoCategori__item'>
              <div className="mainProduct__promoCategori__text">Наша новогодняя выпечка</div>
              <img src={img1} alt="" />
            </div>
            <div className='mainProduct__promoCategori__item'>
              <div className="mainProduct__promoCategori__text">Сейчас сезон:что покупать в дукабре</div>
              <img src={img1} alt="" />
            </div>
          </div>
          <h2 className="mainProduct__title">Акции</h2>

          <div className="mainProduct__stocks__container">
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Экзотические фрукты</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Закупиться со скидкой</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Больше</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Больше</div>
              <img src={img2} alt="" />
            </div>
          </div>

          <h2 className="mainProduct__title">Выгодная полка</h2>
          <div className="mainProduct__shelf__container">

            <div className="mainProduct__shelf__item">
              <div className="mainProduct__shelf__img__container">
                <div className="mainProduct__shelf__img__text">-30%</div>
                <img src={img3} alt="" />
              </div>
              <div className="mainProduct__shelf__text">Форель Самокат Стейковая, замороженнаяaaaaaaaaaaa</div>
              <div className="mainProduct__shelf__inf__container">
                <div className="mainProduct__shelf__inf__gram">390 г</div>
                <div className="mainProduct__shelf__inf__tipy">Выгодно</div>
              </div>
              <button className="mainProduct__shelf__btn">
                <div className="mainProduct__shelf__btn__firssPrice">777</div>
                <div className="mainProduct__shelf__btn__secondPrice">539Р</div>
              </button>
            </div>

            <div className="mainProduct__shelf__item">
              <div className="mainProduct__shelf__img__container">
                <div className="mainProduct__shelf__img__text">-30%</div>
                <img src={img3} alt="" />
              </div>
              <div className="mainProduct__shelf__text">Форель Самокат Стейковая, замороженная</div>
              <div className="mainProduct__shelf__inf__container">
                <div className="mainProduct__shelf__inf__gram">390 г</div>
                <div className="mainProduct__shelf__inf__tipy">Выгодно</div>
              </div>
              <button className="mainProduct__shelf__btn">
                <div className="mainProduct__shelf__btn__firssPrice">777</div>
                <div className="mainProduct__shelf__btn__secondPrice">539Р</div>
              </button>
            </div>
            <div className="mainProduct__shelf__item">
              <div className="mainProduct__shelf__img__container">
                <div className="mainProduct__shelf__img__text">-30%</div>
                <img src={img3} alt="" />
              </div>
              <div className="mainProduct__shelf__text">Форель Самокат Стейковая, замороженная</div>
              <div className="mainProduct__shelf__inf__container">
                <div className="mainProduct__shelf__inf__gram">390 г</div>
                <div className="mainProduct__shelf__inf__tipy">Выгодно</div>
              </div>
              <button className="mainProduct__shelf__btn">
                <div className="mainProduct__shelf__btn__firssPrice">777</div>
                <div className="mainProduct__shelf__btn__secondPrice">539Р</div>
              </button>
            </div>
            <div className="mainProduct__shelf__item">
              <div className="mainProduct__shelf__img__container">
                <div className="mainProduct__shelf__img__text">-30%</div>
                <img src={img3} alt="" />
              </div>
              <div className="mainProduct__shelf__text">Форель Самокат Стейковая, замороженная</div>
              <div className="mainProduct__shelf__inf__container">
                <div className="mainProduct__shelf__inf__gram">390 г</div>
                <div className="mainProduct__shelf__inf__tipy">Выгодно</div>
              </div>
              <button className="mainProduct__shelf__btn">
                <div className="mainProduct__shelf__btn__firssPrice">777</div>
                <div className="mainProduct__shelf__btn__secondPrice">539Р</div>
              </button>
            </div>
            <div className="mainProduct__shelf__item">
              <div className="mainProduct__shelf__img__container">
                <div className="mainProduct__shelf__img__text">-30%</div>
                <img src={img3} alt="" />
              </div>
              <div className="mainProduct__shelf__text">Форель Самокат Стейковая, замороженная</div>
              <div className="mainProduct__shelf__inf__container">
                <div className="mainProduct__shelf__inf__gram">390 г</div>
                <div className="mainProduct__shelf__inf__tipy">Выгодно</div>
              </div>
              <button className="mainProduct__shelf__btn">
                <div className="mainProduct__shelf__btn__firssPrice">777</div>
                <div className="mainProduct__shelf__btn__secondPrice">539Р</div>
              </button>
            </div>



          </div>

        </div>
      </div>
    </div>
  )
}

export default MainProduct
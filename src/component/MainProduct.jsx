import React from 'react'
import './style/mainProduct.css'
import MainSidebar from './MainSidebar'


import img1 from './photo/Без названия.jpg'
import img2 from './photo/0a1d7c7e-f557-4a44-8e8c-5e8f917f8063.jpg'
import img3 from './photo/d8358541c8e02f19_2200257000008-1.jpg'
import small1 from './photo/smal1.jpg'
import small2 from './photo/small2.jpg'
import small3 from './photo/smal3.jpg'
import small4 from './photo/small4.jpg'
import MainRightSdebar from './MainRightSdebar'
import EnterModal from './modal/EnterModal'
function MainProduct() {
  return (
    <div className='mainProduct'>
      <MainSidebar />
      <div className='mainProduct__container' >
        <div className="mainProduct__input__list">
          <div className="mainProduct__input__container">
            <div className='input__con'>
              <i className='mainProduct__input__icon vbf-search'></i>
              <input type="text" placeholder='Хавка' className="mainProduct__input" />
            </div>
          </div>
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
              <div className="mainProduct__shelf__text">Форель Самокат Стейковая, замороженная</div>
              <div className="mainProduct__shelf__inf__container">
                <div className="mainProduct__shelf__inf__gram">390 г</div>
                <div className="mainProduct__shelf__inf__tipy">Выгодно</div>
              </div>
              <button className="mainProduct__shelf__btn">
                <div className="mainProduct__shelf__btn__firssPrice">777</div>
                <div className="mainProduct__shelf__btn__secondPrice">539Р</div>
                <i className="mainProduct__shelf__btn__icon  vbf-plus-big"></i>
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
                <i className="mainProduct__shelf__btn__icon  vbf-plus-big"></i>
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
                <i className="mainProduct__shelf__btn__icon  vbf-plus-big"></i>
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
                <i className="mainProduct__shelf__btn__icon  vbf-plus-big"></i>
              </button>
            </div>
            <div className="mainProduct__shelf__item shelf__lastChild">
              <img src={small1} alt="" className="mainProduct__shelf__lastImg" />
              <img src={small2} alt="" className="mainProduct__shelf__lastImg" />
              <img src={small3} alt="" className="mainProduct__shelf__lastImg" />
              <img src={small4} alt="" className="mainProduct__shelf__lastImg" />
              <div className="lastChild__bg__container"></div>
              <div className="lastChild__btn">
                Больше
                <i className="lastChild__icon vbf-chevron-right-big"></i>
              </div>
            </div>

          </div>

          <div className="mainProduct__Categories__container">
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
          </div>

          <h2 className="mainProduct__title">От Самоката</h2>

          <div className="mainProduct__Categories__container">
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
          </div>
          <h2 className="mainProduct__title">Готовая еда</h2>

          <div className="mainProduct__Categories__container">
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
          </div>

          <h2 className="mainProduct__title">Молоко, яйца и сыр</h2>

          <div className="mainProduct__Categories__container">
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
          </div>

          <h2 className="mainProduct__title">Хлеб и выпечка</h2>

          <div className="mainProduct__Categories__container">
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
            <div className='mainProduct__stocks__items'>
              <div className="mainProduct__stocks__text">Много скидок до 50%</div>
              <img src={img2} alt="" />
            </div>
          </div>

        </div>
      </div>
      <MainRightSdebar />
    </div>
  )
}

export default MainProduct
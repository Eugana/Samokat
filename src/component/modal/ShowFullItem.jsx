import React, { Component } from 'react'
import '../style/modal/showFullItem.css'

import arrowr from '../photo/sliderNextArrow.60323649.svg'
import arrowl from '../photo/sliderPrevArrow.ed7da444.svg'
import Item from '../Item'
export class ShowFullItem extends Component {
  render() {
    return (
      <div className='itemModal'>
        <div className='enterModal__container' >
          <div className="enterModal__list">
            <div className="itemModal__container">
              <div className="itemModal__item">
                <div className="itemModal__img__container">
                  <div className="mainProduct__shelf__img__text itemModal__img__text">{this.props.item.salle}</div>
                  <img className='itemModal__img' src={'./img/' + this.props.item.img} alt="" />
                  <img className='itemModal__right__arrow' src={arrowr} alt="" />
                  <img className='itemModal__left__arrow' src={arrowl} alt="" />
                </div>
                <h3>Что ещё пригодится</h3>
                <div className="itemModal__product__contaier">
                  {this.props.items.map(el => (
                    <Item key={el.id} item={el} onAdd={this.props.onAdd} />
                  ))}
                </div>
              </div>


              <div className="itemModal__item">
                <div className='descrip__item'>
                  <h2>Круассан Самокат на <br /> сливочном масле</h2>
                  <div className="weight">50г</div>
                  <div className="taste__container">
                    <div className="taste__text">Сливочный вкус</div>
                    <div className="taste__text">Ещё вкуснее, если слегка подсушить</div>
                    <div className="taste__text">Можно добавить сытную или сладкую начинку</div>
                  </div>
                  <i className="itemModal__close  vbf-no" onClick={() => this.props.onShowItem(this.props.item)}  ></i>

                </div>
                <div className="descrip__item">
                  <div className="descripstion__item">Воздушный круассан, выпеченный на сливочном масле. Можно есть просто так, а можно разрезать и добавить внутрь сытную или сладкую начинку.</div>
                </div>
                <div className="descrip__item">
                  <div className="description__title">В 100 граммах</div>
                  <div className="structure__container">
                    <div className="structure___item">
                      <div className="structure__num">360</div>
                      <div className="structure__name">Ккал</div>
                    </div>
                    <div className="structure___item">
                      <div className="structure__num">7.5 г</div>
                      <div className="structure__name">Белки</div>
                    </div>
                    <div className="structure___item">
                      <div className="structure__num">19 г</div>
                      <div className="structure__name">Жиры</div>
                    </div>
                    <div className="structure___item">
                      <div className="structure__num">39 г</div>
                      <div className="structure__name">Углеводы</div>
                    </div>
                  </div>
                </div>
                <div className="descrip__item">
                  <div className="description__title">  Состав</div>
                  <div className="description__text">
                    Мука пшеничная хлебопекарная высшего сорта, масло сладко-сливочное несоленое м.д.ж. 82,5% (пастеризованные сливки), вода питьевая, сахар, меланж яичный, дрожжи хлебопекарные, соль, улучшитель хлебопекарный (клейковина пшеничная, мука пшеничная, эмульгатор (эфиры глицерина и диацетилвинной и жирных кислот), антиокислитель (аскорбиновая кислота)), улучшитель хлебопекарный (пшеничная клейковина, эмульгатор (эфиры глицерина и диацетилвинной и жирных кислот), антиокислитель (аскорбиновая кислота)), глютен пшеничный. Продукция изготавливается на производстве, где используются арахис, кунжут, орехи
                  </div>
                  <div className="description__title">  Срок хранения</div>
                  <div className="description__text">3 дня</div>
                  <div className="description__title">  Условия хранения</div>
                  <div className="description__text">При температуре от +10°С до +20°С</div>
                  <div className="description__title">  Производитель</div>
                  <div className="description__text">ООО Гранола-Опт, Россия</div>
                </div>
                <h1 onClick={() => this.props.onAdd(this.props.item)} >Добавить</h1>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default ShowFullItem
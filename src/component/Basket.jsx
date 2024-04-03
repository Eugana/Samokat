import React, { Component } from 'react'

export class Basket extends Component {
  render() {
    return (

      <div className="basket__item">
        <img src={'./img/' + this.props.item.img} alt="" />
        <div className="basket__content">
          <div className="basket__besc">{this.props.item.desc}
            <i className='basket__no vbf-no' onClick={() => this.props.onDelete(this.props.item.id)}></i>
          </div>

          <div className="mainProduct__shelf__inf__container">
            <div className="mainProduct__shelf__inf__gram">{this.props.item.weight}</div>
            <div className="mainProduct__shelf__inf__tipy">{this.props.item.type}</div>
          </div>
          <div className='basket__last__cont'>
            <div className="basket__cont__btn">
              <i className='basket__num__icon vbf-minus-big'></i>
              <div className="basket__num">`</div>
              <i className='basket__num__icon vbf-plus-big'></i>
            </div>
            <div className="basket__price__cont">
              <div className="mainProduct__shelf__btn__firssPrice">{this.props.item.firsPrice} </div>
              <div className="basket__now__price">{this.props.item.nowPrice}</div>
            </div>
          </div>
        </div>
      </div>



    )
  }
}

export default Basket
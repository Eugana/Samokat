import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="mainProduct__shelf__item">
        <div onClick={() => this.props.onShowItem(this.props.item)}>
          <div className="mainProduct__shelf__img__container">
            <div className="mainProduct__shelf__img__text">
              {this.props.item.salle}
            </div>
            <img src={"./img/" + this.props.item.img} alt="" />
          </div>
          <div className="mainProduct__shelf__text">{this.props.item.desc}</div>
          <div className="mainProduct__shelf__inf__container">
            <div className="mainProduct__shelf__inf__gram">
              {this.props.item.weight}
            </div>
            <div className="mainProduct__shelf__inf__tipy">
              {this.props.item.type}
            </div>
          </div>
        </div>
        <button className="mainProduct__shelf__btn">
          <div className="mainProduct__shelf__btn__firssPrice">
            {this.props.item.firsPrice}
          </div>
          <div className="mainProduct__shelf__btn__secondPrice">
            {this.props.item.nowPrice}
          </div>
          <i
            className="mainProduct__shelf__btn__icon  vbf-plus-big"
            onClick={() => this.props.onAdd(this.props.item)}
          ></i>
        </button>
      </div>
    );
  }
}

export default Item;

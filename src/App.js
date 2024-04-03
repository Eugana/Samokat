import MainProduct from "./component/MainProduct";
import "./assets/styles/yarascrift.css";
import "./component/style/app.css";
import "./component/fontello-22460e62/css/yarascrift.css";
import MainLogo from "./component/MainLogo";
import React from "react";
import ShowFullItem from "./component/modal/ShowFullItem";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          img: "d8358541c8e02f19_2200257000008-1.jpg",
          desc: "Форель Самокат Стейковая, замороженная",
          category: "profitably",
          weight: "390г",
          firsPrice: "777",
          nowPrice: "539₽",
          type: "Выгодно",
          salle: "-30%",
        },
        {
          id: 2,
          img: "3926be47a4648066_4607958071678-2.jpg",
          desc: "Колбаса варёная Папа может сочная",
          category: "profitably",
          weight: "400г",
          firsPrice: "280",
          nowPrice: "139₽",
          type: "Выгодно",
          salle: "-50%",
        },
        {
          id: 3,
          img: "aa28e9eb-5506-496d-a106-5aefdd520f42-3.jpg",
          desc: "Томаты черри Сладкая ягода красные, на ветке",
          category: "profitably",
          weight: "200г",
          firsPrice: "185",
          nowPrice: "129₽",
          type: "Сейчас выгодно",
          salle: "-30%",
        },
        {
          id: 4,
          img: "f70322c16d8e93d4_4680068870607-4.jpg",
          desc: "Пирожное Самокат Наполеон, без добавления сахара",
          category: "profitably",
          weight: "100г",
          firsPrice: "154",
          nowPrice: "99₽",
          type: "Выгодно",
          salle: "-35%",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deletOrder = this.deletOrder.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="App">
        <MainProduct
          items={this.state.items}
          onAdd={this.addToOrder}
          onDelete={this.deletOrder}
          orders={this.state.orders}
          onShowItem={this.onShowItem}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            items={this.state.items}
            item={this.state.fullItem}
          />
        )}
      </div>
    );
  }
  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  deletOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;

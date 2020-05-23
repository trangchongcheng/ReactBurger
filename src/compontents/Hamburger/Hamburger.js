import React, { Component } from "react";
import "./style.css";
import BreadTop from "../BreadTop/BreadTop";
import Salad from "../Salad/Salad";
import Cheese from "../Cheese/Cheese";
import Beef from "../Beef/Beef";
import BreadBottom from "../BreadBottom/BreadBottom";
import Menu from "../Menu/Menu";
import { connect } from "react-redux";

class Hamburger extends Component {
  renderBurger = () => {
    let burgers = this.props.burger;
    let items = [];
    for (const key in burgers) {
      let item = burgers[key];
      for (let index = 0; index < item; index++) {
        switch (key) {
          case "salad":
            items.push(<Salad />);
            break;
          case "cheese":
             items.push(<Cheese />);
             break;

          case "beef":
             items.push(<Beef />);
             break;
        }
      }
    }
    return items;

  };

  render() {
    return (
      <div className="row">
        <div className="col-7">
          <h2>Cửa hàng Burger Cybersoft</h2>
          <BreadTop />
          {this.renderBurger()}
          <BreadBottom />
        </div>
        <div className="col-5">
          <h2>Chọn thức ăn</h2>
          <Menu />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
  };
};

export default connect(mapStateToProps, null)(Hamburger);

import React, { Component } from "react";
import { connect } from "react-redux";

class Menu extends Component {
  renderItemFood = () => {
    let menus = this.props.menu;
    let content = [];
    for (const key in menus) {
      content.push(
        <tr key={key}>
          <td>{key}</td>
          <td>
            <button className="btn btn-success" onClick={()=> this.props.add(key)}>+</button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={()=> this.props.remove(key)}>-</button>
          </td>
          <td></td>
          <td>{menus[key]}</td>
        </tr>
      );
    }

    return content;
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th></th>
              <th></th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>{this.renderItemFood()}</tbody>
        </table>
        <tfoot>
          <tr>
            <td>Tổng tiền {this.props.total}</td>
          </tr>
          <tr>
            <td>
              <button className="btn btn-info" >Thanh toán</button>
            </td>
          </tr>
        </tfoot>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch)=>{
    return {
        add:(key)=>{
            dispatch({
                type:'ADD_ITEM',
                key
            })
        },
        remove:(key)=>{
            dispatch({
                type:'REMOVE_ITEM',
                key
            })
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

import React from "react";
import { useCart } from "react-use-cart";

function ItemCard(props) {
  const { addItem } = useCart();
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 oerflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top img-fluid" />
        <div className="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <h5 className="card-text">$ {props.price}</h5>
          <button
            className="btn btn-success"
            onClick={() => {
              addItem(props.item);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;

import React from "react";

const Card = ({ scoop, handleReset, amount, scoopBasket, setScoopBasket }) => {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ width: "150px" }}
    >
      <img src={scoop.imagePath} alt="cesit" className="img-fluid" />
      <label className="lead">{scoop.name}</label>
      <div className="d-flex align-items-center gap-3 my-2">
        <button onClick={() => handleReset(scoop)} className="btn btn-danger">
          sıfırla
        </button>
        <span className="lead">{amount}</span>
        <button
          className="btn btn-warning"
          onClick={() => setScoopBasket([...scoopBasket, scoop])}
        >
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;

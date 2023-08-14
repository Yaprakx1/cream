import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
const Scoops = () => {
  const [scoopsData, setScoopsData] = useState([]);
  const [scoopBasket, setScoopBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3080/cesitler")
      .then((res) => setScoopsData(res.data));
  }, []);
  const findAmount = (scoop) => {
    const found = scoopBasket.filter((i) => i.name === scoop.name);
    return found.length;
  };

  //sıfırla
  const handleReset = (scoop) => {
    const cleared = scoopBasket.filter((i) => i.name !== scoop.name);
    setScoopBasket(cleared);
  };

  return (
    <div className=" text-light">
      <h1>DONDURMA ÇEŞİTLERİ</h1>
      <p>Tanesi 3$</p>

      <h2>Çeşit Ücreti:{scoopBasket.length * 3} </h2>
      <div className="row gap-5 justify-content-between">
        {scoopsData.map((scoop) => {
          const amount = findAmount(scoop);
          return (
            <Card
              scoop={scoop}
              handleReset={handleReset}
              amount={amount}
              scoopBasket={scoopBasket}
              setScoopBasket={setScoopBasket}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Scoops;

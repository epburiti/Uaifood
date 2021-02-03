import React, { useEffect, useState } from 'react';

import {
  Container,
  SearchTop,
  ContainerAside
} from '../../styles/pages/Restaurants';
import Seearch from '../../components/Search/index';
import LogoRed from '../../assets/uaifood/logo-red.jpg';

import { AiOutlineStar } from 'react-icons/ai';
import axios from './../../services/api';

interface typesOfKitchensResponse {
  cuisines: [
    {
      cuisine: {
        cuisine_id: Number;
        cuisine_name: String;
      };
    }
  ];
}

const sizeStar = 15;
const starColor = '#484848';
const Restaurants = () => {
  const [typeOfRestaurants, setTypeOfRestaurants] = useState([]);
  function getTypesOfKitchen() {
    axios
      .get<typesOfKitchensResponse>('/cuisines?city_id=67')
      .then(response => {
        const ref = response.data.cuisines.filter((item, index) => index < 10);
        console.log(ref);
        setTypeOfRestaurants(ref);
      });
  }

  useEffect(() => {
    getTypesOfKitchen();
  }, []);
  return (
    <Container>
      <SearchTop>
        <img src={LogoRed} alt="Logo Ifood" />
        <Seearch navBar={true} />
      </SearchTop>
      <ContainerAside>
        <div className="content">
          <div className="card">
            <h5>NOTA:</h5>
            <div className="iten-aside">
              <input type="checkbox" name="1star" id="1star" />
              <AiOutlineStar size={sizeStar} color={starColor} />
            </div>
            <div className="iten-aside">
              <input type="checkbox" name="1star" id="1star" />
              <AiOutlineStar size={sizeStar} color={starColor} />
              <AiOutlineStar size={sizeStar} color={starColor} />
            </div>
            <div className="iten-aside">
              <input type="checkbox" name="1star" id="1star" />
              <AiOutlineStar size={sizeStar} color={starColor} />
              <AiOutlineStar size={sizeStar} color={starColor} />
              <AiOutlineStar size={sizeStar} color={starColor} />
            </div>
            <div className="iten-aside">
              <input type="checkbox" name="1star" id="1star" />
              <AiOutlineStar size={sizeStar} color={starColor} />
              <AiOutlineStar size={sizeStar} color={starColor} />
              <AiOutlineStar size={sizeStar} color={starColor} />
              <AiOutlineStar size={sizeStar} color={starColor} />
            </div>
            <div className="iten-aside">
              <input type="checkbox" name="1star" id="1star" />
              <AiOutlineStar size={sizeStar} color={starColor} />
              <AiOutlineStar size={sizeStar} color={starColor} />
              <AiOutlineStar size={sizeStar} color={starColor} />
              <AiOutlineStar size={sizeStar} color={starColor} />
              <AiOutlineStar size={sizeStar} color={starColor} />
            </div>
          </div>
          <div className="card">
            <h5>CUSTO PARA 2 PESSOAS:</h5>
            <div className="iten-aside">
              <input type="checkbox" name="price" id="price" />
              <p>Atè R$50</p>
            </div>
            <div className="iten-aside">
              <input type="checkbox" name="price2" id="price2" />
              <p>De R$50 a R$180</p>
            </div>
            <div className="iten-aside">
              <input type="checkbox" name="price3" id="price3" />
              <p>De R$180 a R$110</p>
            </div>
            <div className="iten-aside">
              <input type="checkbox" name="price4" id="price4" />
              <p>Acima R$110</p>
            </div>
          </div>
          <div className="card">
            <h5>Tipo de Cozinha:</h5>
            {typeOfRestaurants.map((item, index) => (
              <div className="iten-aside" key={index}>
                <input
                  type="checkbox"
                  name={`typeOfRestaurants${index}`}
                  id={`typeOfRestaurants${index}`}
                />
                <p>{item.cuisine.cuisine_name}</p>
              </div>
            ))}
          </div>
        </div>
      </ContainerAside>
    </Container>
  );
};

export default Restaurants;

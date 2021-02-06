import React, { useEffect, useState } from 'react';
import {
  Container,
  SearchTop,
  ContainerAside,
  ContainerCards
} from '../../styles/pages/Restaurants';
import Seearch from '../../components/Search/index';
import LogoRed from '../../assets/uaifood/logo-red.jpg';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { HiUsers } from 'react-icons/hi';
import axios from './../../services/api';

import { useSelector } from 'react-redux';
import ImageCard from '../../components/ImageCard';

import Loader from '../../components/Loader';

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
  const selectedCity = useSelector(state => state.City);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [typeOfRestaurants, setTypeOfRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsRef, setRestaurantsRef] = useState([]);
  const [cusinesIds, setCusinesIds] = useState([]);
  const [stars, setStars] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false
  });

  function getTypesOfKitchen(id) {
    setLoading(true);

    axios
      .get<typesOfKitchensResponse>(`/cuisines?city_id=${id}`)
      .then(response => {
        const ref = response.data.cuisines.filter((item, index) => index < 10);
        setTypeOfRestaurants(ref);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }
  function getRestaurants(id) {
    const cusines = cusinesIds.join('%2C');
    const url =
      cusines == ''
        ? `/search?entity_type=city&entity_id=${id}`
        : `/search?entity_type=city&entity_id=${id}&cuisines=${cusines}`;
    setLoading(true);
    axios
      .get(url)
      .then(resp => {
        setRestaurants(resp.data.restaurants);
        setRestaurantsRef(resp.data.restaurants);
        setOffset(state => state + 20);

        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }
  function getData() {
    setOffset(state => 0);
    getTypesOfKitchen(selectedCity.city_id);
    getRestaurants(selectedCity.city_id);
    handleStars();
  }
  function handleStars() {
    console.log('alo');
    const dataRef = restaurantsRef.filter(item => {
      const rank = parseInt(item.restaurant.user_rating.aggregate_rating);
      if (rank === 1 && stars.first) {
        return item;
      } else if (rank === 2 && stars.second) {
        return item;
      } else if (rank === 3 && stars.third) {
        return item;
      } else if (rank === 4 && stars.fourth) {
        return item;
      } else if (rank === 5 && stars.fifth) {
        return item;
      } else if (
        !stars.first &&
        !stars.second &&
        !stars.third &&
        !stars.fourth &&
        !stars.fifth
      ) {
        return item;
      }
    });
    setRestaurants(dataRef);
  }
  useEffect(() => {
    getData();
  }, [selectedCity, cusinesIds]);
  useEffect(() => {
    handleStars();
  }, [stars]);

  return (
    <Container>
      {loading && <Loader />}
      <SearchTop>
        <img src={LogoRed} alt="Logo Ifood" />
        <Seearch navBar={true} />
      </SearchTop>
      <div className="containerBody">
        <ContainerAside>
          <div className="content">
            <div className="card">
              <h5>NOTA:</h5>
              <div className="iten-aside">
                <input
                  type="checkbox"
                  name="1star"
                  id="1star"
                  onChange={() => {
                    setStars({ ...stars, first: !stars.first });
                  }}
                />
                <AiOutlineStar size={sizeStar} color={starColor} />
              </div>
              <div className="iten-aside">
                <input
                  type="checkbox"
                  name="1star"
                  id="1star"
                  onChange={() => {
                    setStars({ ...stars, second: !stars.second });
                  }}
                />
                <AiOutlineStar size={sizeStar} color={starColor} />
                <AiOutlineStar size={sizeStar} color={starColor} />
              </div>
              <div className="iten-aside">
                <input
                  type="checkbox"
                  name="1star"
                  id="1star"
                  onChange={() => {
                    setStars({ ...stars, third: !stars.third });
                  }}
                />
                <AiOutlineStar size={sizeStar} color={starColor} />
                <AiOutlineStar size={sizeStar} color={starColor} />
                <AiOutlineStar size={sizeStar} color={starColor} />
              </div>
              <div className="iten-aside">
                <input
                  type="checkbox"
                  name="1star"
                  id="1star"
                  onChange={() => {
                    setStars({ ...stars, fourth: !stars.fourth });
                  }}
                />
                <AiOutlineStar size={sizeStar} color={starColor} />
                <AiOutlineStar size={sizeStar} color={starColor} />
                <AiOutlineStar size={sizeStar} color={starColor} />
                <AiOutlineStar size={sizeStar} color={starColor} />
              </div>
              <div className="iten-aside">
                <input
                  type="checkbox"
                  name="1star"
                  id="1star"
                  onChange={() => {
                    setStars({ ...stars, fifth: !stars.fifth });
                  }}
                />
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
                    onChange={() => {
                      const indexOf = cusinesIds.findIndex(
                        element => element === item.cuisine.cuisine_id
                      );
                      if (indexOf >= 0) {
                        const newArr = cusinesIds.filter(
                          element => element !== item.cuisine.cuisine_id
                        );
                        setCusinesIds(newArr);
                      } else {
                        setCusinesIds([...cusinesIds, item.cuisine.cuisine_id]);
                      }
                    }}
                  />
                  <p>{item.cuisine.cuisine_name}</p>
                </div>
              ))}
            </div>
          </div>
        </ContainerAside>
        <ContainerCards>
          <div className="cards">
            {restaurants.map(item => (
              <div className="card">
                <ImageCard {...item.restaurant} />
                <div className="textCard">
                  <h1>{item.restaurant.name}</h1>
                  <p>
                    {item.restaurant.location.address} -{' '}
                    {item.restaurant.location.locality_verbose}
                  </p>
                  {Array.from(
                    Array(
                      parseInt(item.restaurant.user_rating.aggregate_rating)
                    ),
                    (e, i) => {
                      return <AiFillStar color={'39b54a'} size={15} />;
                    }
                  )}
                  <div>
                    <button className="green btn">
                      <HiUsers size={13} className="custom-icon" />
                      {item.restaurant.currency}{' '}
                      {item.restaurant.average_cost_for_two}
                    </button>
                    {item.restaurant.highlights.map(i => (
                      <button className="grey btn">{i}</button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContainerCards>
      </div>
    </Container>
  );
};

export default Restaurants;

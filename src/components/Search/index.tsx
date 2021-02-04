import React, { useState } from 'react';
import Link from 'next/link';
import { Container, ContainerItems } from './styles';
import api from '../../services/api';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import * as CityAction from '../../store/ducks/City/action';

export interface propsI {
  navBar: Boolean;
}

const Search = (props: propsI) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [toggleOptions, setToggleOptions] = useState(false);
  const [cities, setCities] = useState([]);
  function getCitiess() {
    api
      .get(`/locations?query=${searchValue}`)
      .then(response => {
        console.log(response.data.location_suggestions);
        setCities(response.data.location_suggestions);
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <Container {...props}>
      <div className="width-input">
        <div className="input-icons">
          <FaMapMarkerAlt className="icone" size={30} color={'#767676'} />
          <input
            className="input-field"
            placeholder="Digite sua cidade"
            onClick={() => {
              setToggleOptions(true);
            }}
            onChange={event => {
              setSearchValue(event.target.value);
              getCitiess();
              setToggleOptions(true);
            }}
            value={searchValue}
          />
        </div>

        <ContainerItems {...props}>
          <div className="content-select">
            {toggleOptions &&
              cities.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchValue(item.title);
                      dispatch(CityAction.saveCity(item));
                      setToggleOptions(false);
                    }}
                  >
                    <h1 className="text">{item.title}</h1>
                    <span className="text">Estado de {item.city_name}</span>
                  </button>
                );
              })}
          </div>
        </ContainerItems>
      </div>
      <Link href="/Restaurants">
        <button className="customButton">Buscar</button>
      </Link>
    </Container>
  );
};

export default Search;

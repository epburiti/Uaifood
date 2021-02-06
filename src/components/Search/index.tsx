import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, ContainerItems } from './styles';
import api from '../../services/api';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import * as CityAction from '../../store/ducks/City/action';

export interface propsI {
  navBar: Boolean;
}

const Search = (props: propsI) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [dataRef, setDataRef] = useState();
  const [toggleOptions, setToggleOptions] = useState(false);
  const [cities, setCities] = useState([]);
  const searchSelected = useSelector(state => state.City);
  useEffect(() => {
    if (searchSelected) {
      setSearchValue(searchSelected.city_name);
      getCitiess();
    }
  }, [searchSelected]);
  useEffect(() => {
    console.log(cities);
  }, [cities]);
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
                      setSearchValue(item.city_name + ' ' + item.country_name);
                      setDataRef(item);
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
        <button
          className="customButton"
          onClick={() => {
            dispatch(CityAction.saveCity(dataRef));
          }}
        >
          Buscar
        </button>
      </Link>
    </Container>
  );
};

export default Search;

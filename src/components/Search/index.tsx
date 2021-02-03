import React, { useState } from 'react';

import { Container, ContainerItems } from './styles';
import api from '../../services/api';
import { FaMapMarkerAlt } from 'react-icons/fa';
export interface propsI {
  navBar: Boolean;
}
import { useDispatch } from 'react-redux';

const Search = (props: propsI) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [cities, setCities] = useState([]);
  function getCitiess() {
    api
      .get(`/locations?query=${searchValue}`)
      .then(response => {
        setCities(response.data.location_suggestions);
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <Container {...props}>
      <div className="width-input">
        <FaMapMarkerAlt />
        <input
          placeholder="Digite sua cidade"
          onChange={event => {
            setSearchValue(event.target.value);
            getCitiess();
          }}
          value={searchValue}
        />

        <ContainerItems {...props}>
          <div className="content-select">
            {cities.map((item, index) => {
              return (
                <button key={index} onClick={() => {}}>
                  <h1 className="text">{item.title}</h1>
                  <span className="text">Estado de {item.city_name}</span>
                </button>
              );
            })}
          </div>
        </ContainerItems>
      </div>
      <button>Buscar</button>
    </Container>
  );
};

export default Search;

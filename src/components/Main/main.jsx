import React from 'react';
import arrow from '../../utils/img/arrow-right.svg'
import { Btn } from './main.styled';

const Main = () => {
  return (
    <div>
        <h2>RENEWABLE ENERGY For any task</h2>
        <p>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</p>
        <Btn type='button'>Learn more<img alt='arrow right' src={arrow}></img></Btn>
        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        <p>office@ecosolution.com</p>
    </div>
  )
}

export default Main;
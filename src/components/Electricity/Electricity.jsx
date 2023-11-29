import React, { useState, useEffect } from 'react';
import { Wrapper,GreenLine,TitleElectricity,WrapperElectricity,TextNumbers,NumberValue } from './Electricity.styled'

const Electricity = () => {
    const [electricityValue, setElectricityValue] = useState(1134147814);
    useEffect(() => {
        const intervalId = setInterval(() => {
          setElectricityValue(prevValue => prevValue + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    },[]);

    const addDots = (val) => val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <Wrapper>
        <TitleElectricity>Electricity we produced for all time</TitleElectricity>
        <GreenLine/>
        <WrapperElectricity><TextNumbers>{addDots(electricityValue)}</TextNumbers><NumberValue>kWh</NumberValue></WrapperElectricity>

    </Wrapper>
  )
}

export default Electricity
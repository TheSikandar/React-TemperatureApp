import React,{useState} from 'react'
import '../temperature/temp.css'

const TempController = () => {
    const[temperatureValue, setTeperatureValue] = useState(10);
    const[temperatureColor, setTeperatureColor] = useState('cold');

    const increaseTemperature = () => {
		const newTemperature = temperatureValue + 1;
		setTeperatureValue(newTemperature);

		if (newTemperature >= 15) {
			setTeperatureColor('hot');
		}
	};

	const decreaseTemperature = () => {
		const newTemperature = temperatureValue - 1;
		setTeperatureValue(newTemperature);
		if (newTemperature < 15) {
			setTeperatureColor('cold');
		}
	};
  return (
    <div className='app-container'>
      <div className='temp-display-container'>
        <div className={`temp-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  )
}

export default TempController

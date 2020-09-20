// react
import React, { useState } from 'react';

// app
import './Weather.scss';
import WeatherForm from './weather-form/Weather-Form';
import WeatherCard from './weather-card/Weather-Card';

const Weather = () => {
	// hook: setCity
	const [city, setCity] = useState('düsseldorf');

	return (
		<section className="wf-wrapper">
			{/* Form */}
			<WeatherForm city={city} setCity={setCity} />

			{/* Card */}
			<WeatherCard city={city} />
		</section>
	);
};
export default Weather;

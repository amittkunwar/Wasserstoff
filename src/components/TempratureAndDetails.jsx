import React from 'react';
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails({ weather }) {
  const {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  } = weather;

    console.log(icon)

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        {/* Display the weather icon using the icon code from the API */}
        <img 
          src={icon} 
          alt="cloud" 
          className="w-[100px] h-[100px]" 
        />
      
        <p className="text-5xl">{temp.toFixed()}°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">{feels_like}°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{humidity}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{speed} km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">{sunrise}</span>
        </p>
        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">{sunset}</span>
        </p>
        <UilSun />
        <p className="font-light">
          High: <span className="font-medium ml-1">{temp_max.toFixed()}°</span>
        </p>
        <UilSun />
        <p className="font-light">
          Low: <span className="font-medium ml-1">{temp_min.toFixed()}°</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;

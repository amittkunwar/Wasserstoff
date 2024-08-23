import UilReact from '@iconscout/react-unicons/icons/uil-react';
import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempratureAndDetails from './components/TempratureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherServices';
import { useEffect, useState } from 'react';

const App = () => {
  const [query, setQuery] = useState({ q: 'Champawat' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const data = await getFormattedWeatherData({ ...query, units });
    setWeather(data);
    console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700';
    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700';
    return 'from-yellow-600 to-orange-700';
  };

  return (
    <div
      className={`mx-auto max-w-screen-md m-4 py-5 rounded-xl shadow-lg px-32 bg-gradient-to-br ${formatBackground()} h-fit shadow-gray-400`}
    >
      {weather && (
        <>
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} setUnits={setUnits} />
          <TimeAndLocation weather={weather} />
          <TempratureAndDetails weather={weather} />
          <Forecast title="daily forecast" data={weather.forecast.daily} />
        </>
      )}
    </div>
  );
};

export default App;

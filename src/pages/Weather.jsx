import { useState } from "react";

function Weather() {

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [weather, setWeather] = useState(null);

  // 🔍 Fetch suggestions (real-time)
  const handleChange = async (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length < 2) {
      setSuggestions([]);
      return;
    }

    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${value}`
    );
    const data = await res.json();

    if (data.results) {
      setSuggestions(data.results);
    }
  };

  // 🌦️ Fetch weather
  const getWeather = async (lat, lon, name) => {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    const data = await res.json();

    setWeather({
      city: name,
      temp: data.current_weather.temperature,
      wind: data.current_weather.windspeed,
    });

    setSuggestions([]);
    setSearch(name);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center 
    bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100
    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

      <div className="bg-white dark:bg-slate-800 text-black dark:text-white 
      p-6 rounded-2xl shadow-xl w-[400px] text-center">

        <h2 className="text-2xl mb-4 text-indigo-600 dark:text-indigo-400 font-bold">
          Weather App
        </h2>

        {/* 🔍 Search */}
        <input
          value={search}
          onChange={handleChange}
          placeholder="Search city..."
          className="border p-2 w-full rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* 📋 Suggestions */}
        {suggestions.length > 0 && (
          <div className="bg-gray-100 dark:bg-slate-700 rounded-lg mb-3 max-h-40 overflow-y-auto text-left">
            {suggestions.map((s, i) => (
              <div
                key={i}
                onClick={() => getWeather(s.latitude, s.longitude, s.name)}
                className="p-2 cursor-pointer hover:bg-indigo-200 dark:hover:bg-slate-600"
              >
                {s.name}, {s.country}
              </div>
            ))}
          </div>
        )}

        {/* 🌦️ Weather Result */}
        {weather && (
          <div className="mt-4 p-4 bg-gray-100 dark:bg-slate-700 rounded-lg">

            <h3 className="text-xl font-bold mb-2">
              {weather.city}
            </h3>

            <p>🌡️ Temperature: {weather.temp}°C</p>
            <p>💨 Wind Speed: {weather.wind} km/h</p>

          </div>
        )}

      </div>
    </div>
  );
}

export default Weather;
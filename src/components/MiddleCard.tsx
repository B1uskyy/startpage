
import { useEffect, useState } from "react";
import List from "./List.tsx"; // You may need a React version of List if it uses Astro-only features

export default function ToggleComponent() {
  const [workPage, setWorkPage] = useState(true);
  const [weather, setWeather] = useState();

  useEffect(() => {

    fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=58.14671&lon=7.9956")
      .then(response => response.json())
      .then(data => setWeather(data));
  }, [])


  console.log(weather?.properties.timeseries[0].data.instant.details.air_temperature)

  return (
    <div>
      <button onClick={() => setWorkPage(false)}>Home</button>
      <button onClick={() => setWorkPage(true)}>Work</button>



      <div className="flex items-center justify-center gap-[8vw] h-[40vh] bg-[#292929] rounded-md w-[50vw] shadow-lg">
        {workPage &&
          <>
            <div>
              <List text="Github" link="https://github.com/" />
              <List text="Gmail" link="https://github.com/" />
              <List text="Google Chat" link="https://mail.google.com/chat/u/1/#chat/home" />
            </div>
            <div>
              <List text="Figma" link="https://github.com/" />
              <List text="TBA" link="https://github.com/" />
              <List text="TBA" link="https://mail.google.com/chat/u/1/#chat/home" />
            </div>
          </>
        }
      </div>
    </div>
  );
}


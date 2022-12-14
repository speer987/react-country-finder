import { useEffect, useState } from "react";
import "./styles.css";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Notice from "./Notice.js";
import img1 from "./images/image_one.jpg";
import img2 from "./images/image_two.jpg";
import Info from "./Info.js";
import Image from "./Image.js";
export default function App() {
  const [countryName, setCountryName] = useState("");
  const [data, setData] = useState({});

  function fetchCountryData() {
    if (!countryName) {
      return;
    }
    const country = encodeURIComponent(countryName.toLowerCase());
    const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 400) {
          return response.json();
        } else {
          setData({ error: `There is no country known as "${countryName}".` });
        }
      })
      .then((data) => {
        if (!data) {
          return;
        }
        const country = data[0];
        setData({
          name: country.name.common,
          officialName: country.name.official,
          region: country.region,
          subregion: country.subregion,
          flag: country.flag,
          continent: country.continents,
          capital: country.capital,
          borders: country.borders,
          population: country.population.toLocaleString(),
          timezones: country.timezones
        });
      });
  }

  useEffect(fetchCountryData, [countryName]);

  return (
    <div className="grid-container">
      <Title text="Country Data Finder" />
      <Image
        className="pic"
        id="pic1"
        src={img1}
        alt="people walking in a grassy field surrounded by trees"
      />
      <Image
        className="pic"
        id="pic2"
        src={img2}
        alt="the planet earth from space"
      />
      <Entry action={setCountryName} />
      <Info countryName={countryName} data={data} />
      <Notice data={data} />
    </div>
  );
}

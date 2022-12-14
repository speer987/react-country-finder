export default function Info({ countryName, data }) {
  const loading = Object.keys(data).length === 0;

  if (loading) {
    return <div className="info">Loading...</div>;
  } else if (data.error) {
    return <div className="info">{data.error}</div>;
  } else {
    return (
      <div className="info">
        <ul>
          <li>Common Name: {data.name}</li>
          <li>Official Name: {data.officialName}</li>
          <li>Population: {data.population}</li>
          <li>Region: {data.region}</li>
          <li>Subregion: {data.subregion}</li>
          <li>Flag: {data.flag}</li>
          <li>Capital: {data.capital}</li>
          <li>Continent: {data.continent}</li>
          <li>Time Zones:</li>
          <ul>
            {data.timezones.map((timezone, index) => (
              <li key={index}>{timezone}</li>
            ))}
          </ul>
          <li>Borders:</li>
          <ul>
            {data.borders.map((border, index) => (
              <li key={index}>{border}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}

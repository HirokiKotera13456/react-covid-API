const Selector = (props) => {
  return (
      <div className="selector-container">
          <select onChange={(e) => props.setCountry(e.target.value)}>
              <option>国を選択してください</option>
              {props.countriesJson.map((country, index) => 
                 <option key={index} value={country.Slug}>{country.Country}</option>
              )}
          </select>
          <button onClick={props.getCountryData}>検索する</button>
      </div>
  );
};

export default Selector;
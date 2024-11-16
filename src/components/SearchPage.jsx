import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [query, setQuery] = useState('cymbalta');
  const [data, setData] = useState([]);
  const [suggestions, setSuggestions] = useState();

  const handleChange = (e) => {
    setQuery(e.target.value);
  }


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://rxnav.nlm.nih.gov/REST/spellingsuggestions.json?name=${query}`);
      setSuggestions(result.data.suggestionGroup.suggestionList.suggestion);
    }
    fetchData();
  }, [query]);

  const handleClick = async () => {
    try {
      const response = await axios.get(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${query}`);
      if(response) {
        setData(response.data.drugGroup.conceptGroup);        
      }
    }
    catch (error) {
      console.log(error);
    }    
  }

  console.log(suggestions);

  return ( 
    <div className="search-page">
      <h1>Search Page</h1>
      <input 
      type="text" 
      value={query}
      onChange={(e) => handleChange(e)}
      /> <br />
      <button onClick={handleClick}>Search</button>
      <br />
      {suggestions ? <strong>some suggestions...</strong> : <p>no suggestions for now</p>}
      <div>{suggestions}</div>
      

      {data && data?.map((item, index) => (
        <div key={index}>
          {item?.conceptProperties && item?.conceptProperties?.map((object, rxcui) => (
            <ul key={rxcui}>
              <li>
              <Link to= {`/drugs/${object.rxcui}`} state={object} >
                {object.name}
              </Link>
                </li>
            </ul>
          ))}
        </div>
      ))}
    </div>
   );
}
 
export default SearchPage;
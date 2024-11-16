import { Link } from "react-router-dom";

const Home = () => {
  return ( 
    <div className="home">
      <h1>Search Drugs</h1>
      <Link to="/drugs/search">Click here to search for drugs</Link>
    </div>
   );
}
 
export default Home;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DrugPage = () => {

  const [data, setData] = useState();
  const rxcui = useParams();
  console.log(rxcui.rxcui)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://rxnav.nlm.nih.gov/REST/rxcui/${rxcui.rxcui}/ndcs.json`);
      console.log(result);
      setData(result.data.ndcGroup.ndcList.ndc)
    }
    fetchData();
  }, [rxcui.rxcui]);

  return ( 
    <div>
      <h2>Details page</h2>
      <br />
      Name: 
      <br />
      Synonym: 
      <br />
      NDC: 
      {data && data.map((item, index) => (
        <div key={index}>
          {item}
        </div>
      ))}
    </div>
   );
}
 
export default DrugPage;
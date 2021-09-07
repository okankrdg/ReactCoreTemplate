import axios from "axios";
import { useState, useEffect } from "react";
const ProjectTypes = () => {
  const [projectTypes, setProjectTypes] = useState([]);
  useEffect(() => {
    axios
      .get("/projecttype")
      .then(function (response) {
        console.log(response);
        setProjectTypes(response.data);
      })
      .then(function (error) {});
  }, []);
  return (
    <div>
      <h4>Proje Türleri</h4>
      <ul>
        {projectTypes.map((pt) => {
          return <li>{pt.name}</li>;
        })}
      </ul>
    </div>
  );
};
export default ProjectTypes;

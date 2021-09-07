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
        {projectTypes.map((pt, index) => {
          return (
            <li key={index}>
              {pt.name} {index}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ProjectTypes;

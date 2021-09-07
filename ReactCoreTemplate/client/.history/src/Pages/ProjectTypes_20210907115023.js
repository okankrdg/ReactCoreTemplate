import axios from "axios";
import { useState, useEffect, Fragment } from "react";
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
            <Fragment>
              <li key={index}>{pt.name}</li>
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};
export default ProjectTypes;

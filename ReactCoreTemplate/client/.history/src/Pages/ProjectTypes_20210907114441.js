import axios from "axios";
import { useState, useEffect } from "react";
const ProjectTypes = () => {
  const [projectTypes, setProjectTypes] = useState([]);
  useEffect(() => {
    axios
      .get("/projecttypes")
      .then(function (response) {
        console.log(response);
      })
      .then(function (error) {});
  }, []);
  return (
    <div>
      <h4>Proje Türleri</h4>
    </div>
  );
};
export default ProjectTypes;

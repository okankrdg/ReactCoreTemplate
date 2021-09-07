import axios from "axios";
import { useState, useEffect } from "react";
const ProjectTypes = () => {
  useEffect(() => {
    axios.get("");
  }, []);
  return (
    <div>
      <h4>Proje Türleri</h4>
    </div>
  );
};
export default ProjectTypes;

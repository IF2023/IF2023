import { useState, useEffect } from "react";
import ImageFrame from "./ImageFrame/ImageFrame";
import InformationBlock from "./InformationBlock/InformationBlock";
import Filter from "./Filter/filter";

import data from "../../data/projectsData.json";

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState(undefined);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (filter) {
      setFilteredData(
        data.filter((item) => {
          return filter === item.semester ? true : false;
        })
      );
    }
  }, [filter]);

  return (
    <div>
      <ImageFrame data={filteredData} index={index} />
      <InformationBlock data={filteredData} index={index} />
      <Filter data={data} setFilter={setFilter} />
    </div>
  );
};
export default Slideshow;

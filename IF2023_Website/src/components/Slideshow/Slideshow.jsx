import { useState, useEffect } from "react";
import ImageFrame from "./ImageFrame/ImageFrame";
import InformationBlock from "./InformationBlock/InformationBlock";
import Filter from "./Filter/filter";
import BulletNavigation from "./BulletNavigation/BulletNavigation";

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
    } else {
      setFilteredData(data);
    }

    setIndex(0);
  }, [filter]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index + 1 >= filteredData.length) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [index, filteredData]);

  if (filteredData) {
    return (
      <div>
        <ImageFrame data={filteredData} index={index} />
        <BulletNavigation
          data={filteredData}
          currentSlide={index}
          setIndex={setIndex}
        />
        <InformationBlock data={filteredData} index={index} />
        <Filter data={data} setFilter={setFilter} />
      </div>
    );
  }
};

export default Slideshow;

const Filter = ({ data, setFilter }) => {
  const filters = new Set();
  data.forEach((item) => {
    filters.add(item.semester);
  });
  return (
    <div>
      {[...filters].map((item) => {
        return <p onClick={() => setFilter(item)}>{item}</p>;
      })}
    </div>
  );
};
export default Filter;

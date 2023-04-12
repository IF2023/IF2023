const Filter = ({ data, setFilter }) => {
  const filters = new Set();
  data.forEach((item) => {
    filters.add(item.semester);

    //Todo: Add deselect Logic for Filters
    //ToDo: Add Selection Indicator
  });
  return (
    <div>
      {[...filters].map((item) => {
        return (
          <p key={item} onClick={() => setFilter(item)}>
            // {item}. Semester
          </p>
        );
      })}
    </div>
  );
};
export default Filter;

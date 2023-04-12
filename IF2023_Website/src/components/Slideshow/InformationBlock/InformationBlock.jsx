const InformationBlock = ({ data, index }) => {
  if (data) {
    return (
      <>
        <h3>{data[index].title}</h3>
        <p>{data[index].description}</p>
      </>
    );
  }
};
export default InformationBlock;

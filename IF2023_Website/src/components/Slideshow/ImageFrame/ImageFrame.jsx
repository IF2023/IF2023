const ImageFrame = ({ data, index }) => {
  //Todo: Map over data to generate Images, set the translate3d depending on the Index

  return (
    <div
      style={{
        width: "300px",
        height: "100px",
        overflow: "hidden",
      }}
    >
      <div
        style={{ whiteSpace: "nowrap", transform: "translate3d(-200%,0,0)" }}
      >
        <div
          style={{
            width: "300px",
            height: "100px",
            display: "inline-block",
            backgroundColor: "green",
          }}
        ></div>
        <div
          style={{
            width: "300px",
            height: "100px",
            display: "inline-block",
            backgroundColor: "red",
          }}
        ></div>
        <div
          style={{
            width: "300px",
            height: "100px",
            display: "inline-block",
            backgroundColor: "blue",
          }}
        ></div>
      </div>
    </div>
  );
};
export default ImageFrame;

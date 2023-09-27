const Box = (props) => {
  const { className, text, textClass } = props;
  return (
    <div className={`box ${className}`}>
      <h1 className={`${textClass}`}>{text}</h1>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box className="small-box" text="Small" textClass="box-text" />
      <Box className="medium-box" text="Medium" textClass="box-text" />
      <Box className="large-box" text="Large" textClass="box-text" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

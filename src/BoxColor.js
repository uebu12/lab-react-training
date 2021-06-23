function BoxColor(props) {
  return (
    <div
      className="color"
      style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}
    >
      {' '}
      <p className="text">
        {' '}
        rgb({props.r},{props.g},{props.b}){' '}
      </p>{' '}
    </div>
  );
}

export default BoxColor;

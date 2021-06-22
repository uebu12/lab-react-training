

function IdCard(props) {
  return (
      
    <div className="container">
      <img src={props.picture} alt="" /><br></br>
      <span>First Name: {props.firstName}</span><br></br>
      <span>Last Name: {props.lastName}</span><br></br>
      <span>Gender: {props.gender}</span><br></br>
      <span>Height: {props.height}</span><br></br>
      <span>Birth: {props.birth}</span>
    </div>
  );
}

export default IdCard;

import Visa from "./visa.png"
import MasterCard from "./master-card.svg"

function CreditCard(props) {
    return (
      <div>
        <img src={props.type === 'Visa' ? Visa : MasterCard} alt="Flag"></img>
        <span>.... .... .... {props.number.split('').slice(12).toString()}</span>
        <span>
          Expire: {props.expirationMonth}/{props.expirationYear}
        </span>
        <span>{props.bank}</span>
        <span>{props.owner}</span>
      </div>
    );
  }
  export default CreditCard;
  
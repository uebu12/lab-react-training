import Visa from "../public/img/visa.png"
import MasterCard from "../public/img/master-card.svg"

function CreditCard(props) {
    return (
      <div>
        <img scr={props.type === 'Visa' ? Visa : MasterCard} alt="Flag"></img>
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
  
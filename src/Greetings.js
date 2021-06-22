function Greetings(props) {
  let word = '';

  switch (props.lang) {
    case 'de':
      word = 'Hallo';
      break;
    case 'fr':
      word = 'Bonjour';
      break;
    case 'es':
      word = '¡Hola!';
      break;
    case 'en':
      word = 'Hello';
      break;
    default:
      word = 'Salve';
      break;
  }
  return <span lang={props.lang}> {word} {props.children}</span>;
}

export default Greetings;

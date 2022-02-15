function DonationComponent(props) {
  const { donation_config } = props;

  let component;
  switch(donation_config.type) {
    case "single":
      switch(donation_config.donation_actions[0].type) {
        case "roundup":
          component = <p>roundup</p>;
          break;
        case "fixed": 
          component = <p>fixed</p>;
          break;
        case "input":
          component = <p>input</p>;
          break;
        default: 
          component = <p>Invalid donation type.</p>;
      }
      break;
    case "multi_type":
      component = <p>multi_type</p>;
      break;
    case "multi_recipient":
      component = <p>multi_recipient</p>;
      break;
    case "custom":
      component = <p>custom</p>;
      break;
    default:
      component = <p>Invalid donation config type.</p>;
  }
  return component;
}

export default DonationComponent;
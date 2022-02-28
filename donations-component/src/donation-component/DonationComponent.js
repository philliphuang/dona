import * as React from 'react';

import RoundUpComponent from './RoundUpComponent';
import FixedComponent from './FixedComponent';
import InputComponent from './InputComponent';
import MultiTypeComponent from './MultiTypeComponent';
import MultiRecipientComponent from './MultiRecipientComponent';
import CustomComponent from './CustomComponent';

function DonationComponent(props) {
  const { configOverride, merchantPublicKey, setSelectedOption } = props;
  const [config, setConfig] = React.useState(configOverride);

  React.useEffect(() => {
    if (merchantPublicKey && !configOverride) {
      // TODO: update to be only active config
      fetch(`http://127.0.0.1:5000/api/merchants/${merchantPublicKey}/donation-configs`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: "include",
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw res.status;
        }
      })
      .then(
        (result) => {
          if (result.active_config) {
            setConfig(result.active_config);
          }
        },
        (error) => {
          switch(error) {
            default:
          }
      });
    }
    if (configOverride) {
      setConfig(configOverride);
    }
  }, [merchantPublicKey, configOverride]);

  let component;
  if (config) {
    switch(config.type) {
      case "single":
        const option = config.options[0];
        switch(option.type) {
          case "roundup":
            component = <RoundUpComponent option={option} setSelectedOption={setSelectedOption} />;
            break;
          case "fixed": 
            component = <FixedComponent option={option} setSelectedOption={setSelectedOption} />;
            break;
          case "input":
            component = <InputComponent option={option} setSelectedOption={setSelectedOption} />;
            break;
          default: 
            component = <p>Invalid donation type.</p>;
        }
        break;
      case "multi_type":
        component = <MultiTypeComponent config={config} setSelectedOption={setSelectedOption} />;
        break;
      case "multi_recipient":
        component = <MultiRecipientComponent config={config} setSelectedOption={setSelectedOption} />;
        break;
      case "custom":
        component = <CustomComponent config={config} setSelectedOption={setSelectedOption} />;
        break;
      default:
        component = <p>Invalid donation config type.</p>;
    }
  }
  
  return (
    <div>
      {component}
    </div>
  );
}

export default DonationComponent;
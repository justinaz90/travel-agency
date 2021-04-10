import React from 'react';
import PropTypes from 'prop-types';
// import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripId, tripName, countryCode, tripDuration) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    countryCode,
    tripDuration,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  if(options.name !== '' && options.contact !== '') {
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  }
  else if(options.name === '' && options.contact === ''){
    alert('Please fill your name and contact info');
  }
  else if(options.name === '') {
    alert('Please fill your name');
  }
  else if(options.contact === '') {
    alert('Please fill your contact info');
  }
};

const OrderForm = ({tripCost, options, setOrderOption, tripId, tripName, countryCode, tripDuration}) => (
  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption
          currentValue={options[option.id]}
          setOrderOption={setOrderOption}
          {...option}
        />
      </Col>
    ))}

    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
    </Col>
    <Button onClick={() => sendOrder(options, tripCost, tripId, tripName, countryCode, tripDuration)}>Order now!</Button>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  countryCode: PropTypes.string,
  tripDuration: PropTypes.number,
};

export default OrderForm;

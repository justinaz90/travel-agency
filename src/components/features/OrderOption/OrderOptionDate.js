import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div className={styles.component}>
    <DatePicker
      selected={currentValue}
      onChange={date => setOptionValue(date)} />
  </div>
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.instanceOf(Date),
  setOptionValue: PropTypes.func,
};

OrderOptionDate.defaultProps = {
  currentValue: new Date(),
};

export default OrderOptionDate;

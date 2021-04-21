import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  getCountdownDays(){
    const currentDay = new Date();
    const summerStart = new Date(Date.UTC(currentDay.getUTCFullYear(), 5, 21));
    const summerEnd = new Date(Date.UTC(currentDay.getUTCFullYear(), 8, 23));

    if(currentDay.getUTCMonth() == summerEnd.getUTCMonth() && currentDay.getUTCDate() > summerEnd.getUTCDate()){
      summerStart.setUTCFullYear(currentDay.getUTCFullYear()+1);
    }

    const oneDay = 1000 * 60 * 60 * 24;

    const daysToSummer = Math.round((summerStart.getTime() - currentDay.getTime()) / oneDay);

    if(daysToSummer === 1) {
      return '1 day to summer!';
    } else if (daysToSummer <= 0) {
      return '';
    } else {
      return daysToSummer + ' days to summer!';
    }
  }

  render(){
    const daysToSummer = this.getCountdownDays();
    return (
      <div className={styles.component}>
        <div className={styles.description}>{daysToSummer}</div>
      </div>
    );
  }
}

export default DaysToSummer;

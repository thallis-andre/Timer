import Image from 'next/image';
import { useEffect, useState } from 'react';
import finalImage from '../../../public/FinalImage.jpg';
import fullLogo from '../../../public/FullLogo.svg';
import styles from './styles.module.scss';

type TimerType = {
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// const fullLogo = 'https://i.ibb.co/yXC166Q/FullLogo.png';

const TimerComponent = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2025-04-12T23:59:59`) - +new Date(); //YYYY-MM-DD
    let timeLeft = {} as TimerType;

    if (difference > 0) {
      timeLeft = {
        weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 7),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      const isTimerEnded =
        newTimeLeft.weeks === 0 &&
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0;

      if (isTimerEnded) {
        setTimerEnded(true);
      }
    }, 1000);
  });

  return (
    <div className={styles.container}>
      {timerEnded ? (
        <>
          <Image src={finalImage} alt="Foto final" width={200} height={300} />
          <div className={styles.finalText}>
            <span>Sou extremamente feliz por ter você como namorada </span>
          </div>
        </>
      ) : (
        <>
          <Image src={fullLogo} alt="Logo" width={250} height={130} />
          <div className={styles.subtitle}>
            <span>Faltam exatamente:</span>
          </div>
          <div className={styles.weekCounter}>
            <span className={styles.numberWeek}>{timeLeft.weeks}</span>
            <span>semanas</span>
          </div>
          <div className={styles.counters}>
            <span className={styles.numberInside}>
              <span>{timeLeft.days}</span>d <span>{timeLeft.hours}</span>h <span>{timeLeft.minutes}</span>
              min <span>{timeLeft.seconds}</span>s
            </span>
          </div>
          <div className={styles.finalText}>
            <span>Para finalmente você ser minha namorada</span>
          </div>
        </>
      )}
    </div>
  );
};

export default TimerComponent;

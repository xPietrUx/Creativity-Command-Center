import { useEffect, useState } from 'react';

const Informant = () => {
  const [data, setData] = useState<string[]>([
    'Hello Peter',
    'Today is:',
    'Monday, 19.02.2024',
    'Anticipated events:',
    '🧑‍🎓 Colloquium in mathematical analysis',
  ]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < data.length - 1) {
        setCurrentIndex((index) => index + 1);
      } else {
        clearInterval(interval);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, data]);
  return <h1>{data[currentIndex]}</h1>;
};
export default Informant;

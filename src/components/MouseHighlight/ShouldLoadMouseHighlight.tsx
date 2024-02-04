import { Suspense, lazy, useEffect, useState } from 'react';

const MouseHighlight = lazy(() => import('./MouseHighlight'));

const ShouldLoadMouseHighlight: React.FC = () => {
  let sizeOfWindow: number = 1025;
  const [load, setLoad] = useState(window.innerWidth >= sizeOfWindow);

  useEffect(() => {
    const handleSize = () => {
      setLoad(window.innerWidth >= sizeOfWindow);
    };

    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  });

  return (
    <>
      {load && (
        <Suspense>
          <MouseHighlight />
        </Suspense>
      )}
    </>
  );
};
export default ShouldLoadMouseHighlight;

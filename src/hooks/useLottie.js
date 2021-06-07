import { useEffect, useRef } from 'react';

export default function useLottie() {
  const ref = useRef(null);

  useEffect(() => {
    ref?.current?.play();
  }, [ref]);

  return { ref };
}

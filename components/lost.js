import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Lost() {
  const router = useRouter()

  useEffect(() => {
    router.push('/404')
  }, []);

  return null;
}

export default Lost;

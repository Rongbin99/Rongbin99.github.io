import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Projects() {
  const router = useRouter()

  useEffect(() => {
    router.push('/tags/side_project')
  }, []);

  return null;
}

export default Projects;

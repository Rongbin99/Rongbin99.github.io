import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Error 404</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-4xl mb-2">Error 404: Page Not Found</h1>
          <p className="text-xs md:text-sm mb-4">erm...</p>
        </div>
      </div>
    </div>
  );
};
  
export default NotFound;
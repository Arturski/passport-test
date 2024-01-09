import React, { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PassportContext } from '../PassportContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(PassportContext);

  useEffect(() => {
    const handleLoginCallback = async (): Promise<void> => {
      if (context && context.passportClient) {
        await context.passportClient.loginCallback();
      }

      const params = new URLSearchParams(location.search);
      if (params.toString() === '') {
        console.log('No valid callback parameters found');
        navigate('/');
      }
    };

    handleLoginCallback();
  }, [context, location.search, navigate]);

  return (
    <div>
      <h1>Login page</h1>
      {/* Add your login page content here */}
    </div>
  );
};

export default Login;

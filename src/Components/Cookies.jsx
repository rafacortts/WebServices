import React, { useState } from 'react';
import Cookies from 'js-cookie';

const CookieExample = () => {
  const [cookieValue, setCookieValue] = useState(Cookies.get('myCookie') || '');

  const handleSetCookie = () => {
    Cookies.set('myCookie', 'Hello, World!', { expires: 7 });
    setCookieValue('Hello, World!');
  };

  const handleDeleteCookie = () => {
    Cookies.remove('myCookie');
    setCookieValue('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Cookie Example</h1>
      <button onClick={handleSetCookie} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
        Set Cookie
      </button>
      <button onClick={handleDeleteCookie} className="bg-red-500 text-white px-4 py-2 rounded">
        Delete Cookie
      </button>
      <p className="mt-4">Cookie Value: {cookieValue}</p>
    </div>
  );
};

export default CookieExample;

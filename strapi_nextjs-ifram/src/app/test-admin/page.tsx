"use client";

import { useEffect, useState } from 'react';

const Admin = () => {
  const [iframeHeight, setIframeHeight] = useState('100vh');

  useEffect(() => {
    const handleResize = () => {
      setIframeHeight(`${window.innerHeight}px`);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ height: iframeHeight }}>
        <h1>This is strapi admin: </h1>
      <iframe
        src="http://localhost:1337/admin"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Strapi Admin"
      />
    </div>
  );
};

export default Admin;


// https://www.startech.com.bd/
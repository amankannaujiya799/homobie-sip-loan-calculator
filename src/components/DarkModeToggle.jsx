import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.className = dark ? 'dark' : '';
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)}>
      Toggle {dark ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default DarkModeToggle;

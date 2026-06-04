import React, { createContext, useState, useContext, useEffect } from 'react';

const StyleContext = createContext();

export const useStyle = () => useContext(StyleContext);

export const StyleProvider = ({ children }) => {
  const [isOriginal, setIsOriginal] = useState(false);

  useEffect(() => {
    if (isOriginal) {
      document.body.classList.add('original-styles');
      document.body.classList.remove('new-styles');
    } else {
      document.body.classList.add('new-styles');
      document.body.classList.remove('original-styles');
    }
  }, [isOriginal]);

  const toggleStyle = () => setIsOriginal(!isOriginal);

  return (
    <StyleContext.Provider value={{ isOriginal, toggleStyle }}>
      {children}
    </StyleContext.Provider>
  );
};

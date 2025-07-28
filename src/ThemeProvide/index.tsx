import React, { createContext, useContext } from 'react';

interface ThemeContextType {
  className: string;
}

const ThemeContext = createContext<ThemeContextType>({
  className: '',
});

export const useThemeContext = () => useContext(ThemeContext);

interface ThemeProvideProps {
  children: React.ReactNode;
  className: string;
}

export const ThemeProvide: React.FC<ThemeProvideProps> = ({
  children,
  className,
}) => {
  const { className: contextClassName } = useContext(ThemeContext);
  if (contextClassName && contextClassName === className) {
    return <>{children}</>;
  }
  return (
    <ThemeContext.Provider value={{ className }}>
      <div className={className}>{children}</div>
    </ThemeContext.Provider>
  );
};

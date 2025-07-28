import React, { createContext, useContext } from 'react';
import { CSSVariables } from '../hooks/useCSSVariables';

interface ThemeContextType {
  className: string;
  cssVariables: Partial<CSSVariables>;
}

const ThemeContext = createContext<ThemeContextType>({
  className: '',
  cssVariables: {},
});

export const useThemeContext = () => useContext(ThemeContext);

interface ThemeProvideProps {
  children: React.ReactNode;
  className: string;
  cssVariables?: Partial<CSSVariables>;
}

export const ThemeProvide: React.FC<ThemeProvideProps> = ({
  children,
  className,
  cssVariables = {},
}) => {
  const { className: contextClassName } = useContext(ThemeContext);
  if (contextClassName && contextClassName === className) {
    return <>{children}</>;
  }
  return (
    <ThemeContext.Provider value={{ className, cssVariables }}>
      <div className={className}>{children}</div>
    </ThemeContext.Provider>
  );
};

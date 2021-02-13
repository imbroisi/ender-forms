import React, { createContext } from 'react';

interface Props {
  children: React.ReactChild | null;
}

interface IContextType {
  getFieldsPrefix: () => string;
  setFieldsPrefix: (value: string) => void;
  clearFieldsPrefix: () => void;
}

export const FieldsPrefixContext = createContext<IContextType>({
  getFieldsPrefix: () => '',
  setFieldsPrefix: () => undefined,
  clearFieldsPrefix: () => undefined,
});

export const FieldsPrefixProvider = ({ children }: Props) => {
  const prefixValue = React.useRef<string>('');

  const getFieldsPrefix = (): string => prefixValue.current;

  const setFieldsPrefix = (value: string): void => {
    if (prefixValue.current !== value) {
      prefixValue.current = value;
    }
  };

  const clearFieldsPrefix = (): void => {
    prefixValue.current = '';
  };

  return (
    <FieldsPrefixContext.Provider
      value={{
        getFieldsPrefix,
        setFieldsPrefix,
        clearFieldsPrefix,
      }}
    >
      {children}
    </FieldsPrefixContext.Provider>
  );
};

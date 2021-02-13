import React, { cloneElement, isValidElement, ReactNode } from 'react';

interface AlignedFieldsProps {
  children?: ReactNode | ReactNode[];
}

export const Align = ({ children }: AlignedFieldsProps) => {
  if (!children) {
    return null;
  }

  if (!Array.isArray(children)) {
    return <>{children}</>;
  }

  if (children.length > 4) {
    throw new Error('The maximum possible fields inside Align is 4');
  }
  const sm = 12 / children.length;

  return (
    <>
      {children.map(
        (element, key) => isValidElement(element) && cloneElement(element, { sm, key }),
      )}
    </>
  );
};

import { RegisterOptions } from 'react-hook-form/dist/types/validator';

export const mergeValidations = (...validations: RegisterOptions[]): RegisterOptions => {
  if (validations.length === 0) return {};
  let target: RegisterOptions = {};
  validations.forEach((validation) => {
    if (validation.validate) {
      if (typeof validation.validate !== 'object') {
        throw new Error('validate must be an object of callback functions');
      }

      target.validate = { ...target.validate, ...validation.validate };
      delete validation.validate;
    }

    target = { ...target, ...validation };
  });

  return target;
};

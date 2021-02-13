import { mergeValidations } from './mergeValidations';

const REQUIRED = 'required!';
const MAX_LENGTH = 'maximum length!';
const CPF_VALIDATION = (): string => 'cpf invalid!';
const CNPJ_VALIDATION = (): string => 'cnpj invalid!';

describe('mergeValidations', () => {
  it('should return an empty object if no validation is passed', () => {
    expect(mergeValidations()).toMatchObject({});
  });

  it('should merge validations', () => {
    expect(
      mergeValidations({ required: REQUIRED }, { maxLength: { value: 5, message: MAX_LENGTH } }),
    ).toMatchObject({ required: REQUIRED, maxLength: { value: 5, message: MAX_LENGTH } });
  });

  it('should throw error if validate is not an object of callbacks', () => {
    expect(() => {
      mergeValidations({ validate: (_value: string) => 'value is invalid' });
    }).toThrow(Error);
  });

  it('should merge validates', () => {
    expect(
      mergeValidations(
        { required: REQUIRED, validate: { cpf: CPF_VALIDATION } },
        {
          maxLength: { value: 5, message: MAX_LENGTH },
          validate: { cnpj: CNPJ_VALIDATION },
        },
      ),
    ).toMatchObject({
      required: REQUIRED,
      maxLength: { value: 5, message: MAX_LENGTH },
      validate: { cpf: CPF_VALIDATION, cnpj: CNPJ_VALIDATION },
    });
  });
});

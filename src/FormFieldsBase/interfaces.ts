import { ReactNode } from 'react';
import type { FieldErrors } from 'react-hook-form';

export interface SmProp {
  sm?: 12 | 6 | 4 | 3;
}

export interface IMaskOptions {
  [id: string]: boolean | number | string | number[] | string[] | undefined;
}

export interface MaskTextFielsProps {
  inputRef?: (arg0: any) => void;
  maskOptions: IMaskOptions;
  defaultValue: string;
}

export interface ContainersProps extends SmProp {
  id: string;
  name?: string;
  type?: string;
  placeholder?: string;
  label: string;
  acceptedFiles?: string[];
  inputRef?: (arg0: any) => void;
  errors?: FieldErrors<Record<string, unknown>>;
  helperText?: ReactNode;
  InputProps?: any;
  onChange?: (e: any) => void;
  value?: any;
}

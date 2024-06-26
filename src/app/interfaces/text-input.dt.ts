export interface ITextInput {
  id: string;
  label?: string;
  required: boolean;
  placeholder?: string;
  disabled: boolean;
  formFieldName: string;
  codeType:
    | 'AlphaNumeric'
    | 'AlphaText'
    | 'Email'
    | 'Telephone'
    | 'Number'
    | 'Password';

  toolTip?: string;
  min?: number;
  max?: number;
  minLen?: number;
  maxLen?: number;
  validationMessage?: string;
  validationBlankMessage?: string;
  confirmationField?: boolean;
  autocomplete?: string;
  checkedText?: string;
}

export interface ISubmitInput {
  codeType: 'Button' | 'Submit';
  id: string;
  name: string;
  text: string;
  disabled: boolean;
  tooltip?: string;
}

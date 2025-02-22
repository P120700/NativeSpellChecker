import TurboSpellcheckModule from './NativeTurboSpellcheckModule';

export function isValidWord(value:string): boolean {
  return TurboSpellcheckModule.isValid(value);
}

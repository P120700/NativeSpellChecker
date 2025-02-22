import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  isValid(value: string): boolean;
}


export default TurboModuleRegistry.getEnforcing<Spec>('TurboSpellcheckModule');


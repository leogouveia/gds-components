import React from 'react';
import { TamaguiProvider as TamaguiProviderBase } from 'tamagui';
import { gdsConfig } from './tamagui.config';

export function TamaguiProvider({ children }: { children: React.ReactNode }) {
  return (
    <TamaguiProviderBase config={gdsConfig}>{children}</TamaguiProviderBase>
  );
}

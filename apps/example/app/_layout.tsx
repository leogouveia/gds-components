import { DSCProvider } from '@leogouveia/gds-library';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <DSCProvider>
      <Stack />
    </DSCProvider>
  );
}

import { TGProvider } from '@gds/components';
import { Stack } from 'expo-router';

export default function RootLayout() {
  console.log(TGProvider);
  return (
    <TGProvider>
      <Stack />
    </TGProvider>
  );
}

import { Stack } from 'expo-router';
import { TGProvider } from '@gds/components/src';
export default function RootLayout() {
  console.log(TGProvider);
  return (
    <TGProvider>
      <Stack />
    </TGProvider>
  );
}

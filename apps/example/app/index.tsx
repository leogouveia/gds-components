import { Button, Input, View } from '@leogouveia/gds-library';
import { CircularAvatarsWithCustomIcons } from '../components/CircularAvatarsWithCustomIcons';

export default function Index() {
  return (
    <View flex={1} justifyContent="center" gap="$4" padding="$4">
      <Input>
        <Input.Label>Name</Input.Label>
        <Input.Box>
          <Input.Area id="input" placeholder="Enter your name" />
        </Input.Box>
      </Input>
      <Button></Button>
      <CircularAvatarsWithCustomIcons />
    </View>
  );
}

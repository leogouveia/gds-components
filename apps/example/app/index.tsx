
import {Button, View, Text} from "tamagui"; // Adjust the import path as necessary
import { Button as MyButton } from "@gds/components"; // Adjust the import path as necessary

export default function Index() {
  return (
    <View
        flex={1}
        justify={"center"}
        gap={12}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
        <Button>Tamagui Plain</Button>
        <MyButton></MyButton>
    </View>
  );
}

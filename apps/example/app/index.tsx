import {Alert} from "react-native";
import { Button as MyButton } from "@gds/components";
import {Button, View, Text} from "tamagui"; // Adjust the import path as necessary
export default function Index() {
  return (
    <View
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
        gap={12}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
        <MyButton
            title="Clique Aqui!"
            onPress={() => Alert.alert('Sucesso!', 'Você chamou o botão da @my-ui-lib/core!')}
        />
        <Button>Tamagui Plain</Button>
    </View>
  );
}

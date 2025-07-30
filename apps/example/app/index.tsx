import {Alert, Text, View} from "react-native";
import { Button } from "@gds/components"; // Adjust the import path as necessary
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
        <Button
            title="Clique Aqui!"
            onPress={() => Alert.alert('Sucesso!', 'Você chamou o botão da @my-ui-lib/core!')}
        />
    </View>
  );
}

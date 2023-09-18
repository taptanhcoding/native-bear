import { View, Platform, Text } from "react-native";
import { Button, Header } from "react-native-elements";
import { Heading, Page } from "../components";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";
import { TOKEN, submitToken } from "../services/api";
import { useState } from "react";

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token.data;
}

export const BoyScreen: React.FC = () => {
  const [idGau, setIdGau] = useState<string | undefined>();
  return (
    <View>
      <Header
        centerComponent={{
          text: "Dành cho bạn nam 🐯",
          style: { color: "#fff" },
        }}
      />
      <Page>
        <Heading>
          {idGau ? (
            <View>
              <Text>Mã số của bạn là :</Text>
              <Text selectable>{idGau}</Text>
            </View>
          ) : (
            "Bạn chưa có mã số, bấm vào đây để lấy mã"
          )}
        </Heading>
        <Button
          title={"Lấy mã"}
          onPress={async () => {
            const token = await registerForPushNotificationsAsync();
            if (token) {
              // const rs = await submitToken(token);
              setIdGau(token);
            } else alert("Thất bại 👿👿👿");
          }}
        />
      </Page>
    </View>
  );
};

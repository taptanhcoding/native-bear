import { Text } from "react-native"
import { View } from "react-native"
import { Button, Header } from "react-native-elements"
import { Heading, Page } from "../components"
import * as Notifications from 'expo-notifications';

async function getNoficationToken() {
  const {status} =  await Notifications.getPermissionsAsync();
  if(status !== 'granted') {
    const {status} = await Notifications.requestPermissionsAsync();
    if(status !== 'granted') {
        alert('fail to get nofication token')
        return;
    }
  }

  const tokenData = await Notifications.getExpoPushTokenAsync();
  const token = tokenData.data
  console.log(token);
  
}

export const BoyScreen:React.FC = () => {
    return <View>
         <Header centerComponent={{text: "Dành cho bạn nam 🐯",style: {color: "#fff"}}}/>
        <Page>
            <Heading>
                    Bạn chưa có mã số, bấm vào đây để lấy mã
            </Heading>
            <Button title={"Lấy mã"} onPress={getNoficationToken}/>
        </Page>
    </View>
}
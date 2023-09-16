import axios from 'axios'
const EXPO_SERVER_URL = 'https://exp.host/--/api/v2/push/send'
const TOKEN_SERVER_URL = 'https://gau-server.glitch.me/notification'

export interface TOKEN {
    id: number;
    token:string;
}

export const submitToken = async (token: string) => {
    const rs = await axios.post(TOKEN_SERVER_URL,{token})
    const result = rs.data as TOKEN
    return result
}


export const getToken = async (id:number) => {
    const rs = await axios.get(`${TOKEN_SERVER_URL}/${id}`)
    const result = rs.data as TOKEN
    return result
}


export async function sendPushNotification(expoPushToken: any, title: string, body: string) {
    const message = {
        to: expoPushToken,
        sound: 'default',
        title,
        body,
    };

    await axios.post(EXPO_SERVER_URL, message);
    // alert("Triệu hồi anh già thành công 😍")
}
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Button, Header, Input } from "react-native-elements";
import { Heading, Page } from "../components";
import styled from "styled-components";
import { getToken, sendPushNotification } from "../services/api";
import { useState } from "react";

const ButtonContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SummonButton = styled(TouchableOpacity)<{ color?: string }>`
  background-color: ${(p) => p.color || "red"};
  flex: 48% 0 0;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  height: 150px;
  align-items: center;
  justify-content: center;
`;

const SummonButtonText = styled(Text)`
  color: white;
  font-size: 18px;
`;

const token = "ExponentPushToken[8htlKvA3zTZKJgzfjf_DZ_]";

export const GirlScreen: React.FC = () => {
  const [tokenInput, setTokenInput] = useState("");
  const [token, setToken] = useState<string>();
  return (
    <View>
      <Header
        centerComponent={{
          text: "Dành cho bạn nữ🤦‍♀️",
          style: { color: "#fff" },
        }}
      />
      <Page>
        {token ? (
          <View>
            <Heading>Mã số anh già là: {token}</Heading>
            <Heading>Triệu hồi ngay thui 😋</Heading>
          </View>
        ) : (
          <View>
            <Input
              label="Mã của gấu"
              placeholder="Nhập mã số của gấu"
              onChange={(e)=>setTokenInput(e.nativeEvent.text)}
              value={tokenInput}
            />
            <Button
              title={"Xác nhận mã số"}
              onPress={async () => {
                // const storedToken = await getToken(tokenInput);
                setToken(tokenInput);
              }}
            />
          </View>
        )}
        {token && (
          <View style={{ marginTop: 20 }}>
            <Heading>Triệu hồi gấu đực</Heading>
            <ButtonContainer>
              <SummonButton
                color="#e74c3c"
                onPress={() =>
                  sendPushNotification(token, "em bé 👅👅👅💋💋💋💋👅👅👅💋👅👅👅👅👅", "🧋Thèm tà sữa")
                }
              >
                <SummonButtonText>🧋Thèm tà sữa</SummonButtonText>
              </SummonButton>
              <SummonButton
                color="#2980b9"
                onPress={() =>
                  sendPushNotification(
                    token,
                    "em bé 👅👅👅💋💋💋💋👅👅👅💋👅👅👅👅👅",
                    "😋Anh ơi! Đóiiiiiiii"
                  )
                }
              >
                <SummonButtonText>😋Anh ơi bimbim</SummonButtonText>
              </SummonButton>
              <SummonButton
                color="#2ecc71"
                onPress={() =>
                  sendPushNotification(token, "em bé 👅👅👅💋💋💋💋👅👅👅💋👅👅👅👅👅", "🫦Bé nhớ anh")
                }
              >
                <SummonButtonText>🫦Bé nhớ anh</SummonButtonText>
              </SummonButton>
              <SummonButton
                color="#f1c40f"
                onPress={() =>
                  sendPushNotification(token, "em bé 👅👅👅💋💋💋💋👅👅👅💋👅👅👅👅👅", "🏃Anh qua ik")
                }
              >
                <SummonButtonText>🏃Anh qua ik</SummonButtonText>
              </SummonButton>
            </ButtonContainer>
          </View>
        )}
      </Page>
    </View>
  );
};

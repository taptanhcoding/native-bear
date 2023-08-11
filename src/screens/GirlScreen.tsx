import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Button, Header, Input } from "react-native-elements";
import { Heading, Page } from "../components";
import styled from "styled-components";

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

export const GirlScreen: React.FC = () => {
  return (
    <View>
      <Header
        centerComponent={{
          text: "Dành cho bạn nữ🤦‍♀️",
          style: { color: "#fff" },
        }}
      />
      <Page>
        <View>
          <Input label="Mã của gấu" placeholder="Nhập mã số của gấu" />
          <Button title={"Xác nhận mã số"} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Heading>Triệu hồi gấu đực</Heading>
          <ButtonContainer>
            <SummonButton color="#e74c3c">
              <SummonButtonText>🧋Thèm tà sữa</SummonButtonText>
            </SummonButton>
            <SummonButton color="#2980b9">
              <SummonButtonText>😋Anh ơi bimbim</SummonButtonText>
            </SummonButton>
            <SummonButton color="#2ecc71">
              <SummonButtonText>🫦Bé nhớ anh</SummonButtonText>
            </SummonButton>
            <SummonButton color="#f1c40f">
              <SummonButtonText>🏃Anh qua ik</SummonButtonText>
            </SummonButton>
          </ButtonContainer>
        </View>
      </Page>
    </View>
  );
};

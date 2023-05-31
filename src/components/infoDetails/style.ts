import styled from "styled-components/native";

import { colors, fontSizes } from "../../theme";

export const container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  display: flex;
  height: 100px;
  padding-top: 35px;
  justify-content: space-between;
`;
export const buttonInfor = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 56px;
`;
export const textInfor = styled.Text`
  font-size: ${fontSizes.detailsInfo};
  color: ${colors.white};
  padding-top: 15px;
`;

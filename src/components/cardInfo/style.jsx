import styled from "styled-components/native";
import { colors, fontSizes, fontWeights } from "../../theme";

export const container = styled.View`
  flex: 1;
  height: auto;
  overflow: hidden;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px 5px;
  margin-bottom: 10px;
  border-left-width: 8px;
  border-color: ${colors.antihero};
  background-color: ${colors.silver};
`;

export const TextNameComics = styled.Text`
  width: 100%;
  display: flex;
  font-size: 16px;
  color: ${colors.dark};
`;

import styled from "styled-components/native";
import { colors } from "../../theme";

export const headerHome = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 100px;
  padding-top: 35px;
  padding-left: 23px;
  padding-right: 23px;
  z-index: 1;
`;

export const headerDetails = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 100px;
  padding-top: 35px;
  padding-left: 23px;
  padding-right: 23px;
  z-index: 1;
  background-color: ${colors.blackOpacity};
`;

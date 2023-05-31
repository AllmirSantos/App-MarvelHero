import styled from "styled-components/native";

import { colors } from "../../theme";

export const Container = styled.View`
  width: auto;
  flex-direction: row;
  padding-top: 35px;
  padding-right: 20px;
  padding-left: 20px;
  height: auto;
  flex-wrap: wrap;
  display: gap;
`;
export const ButtonHero = styled.TouchableOpacity`
  width: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 56px;
  border-radius: 56px;
  background-color: ${colors.hero};
  padding: 0px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const ButtonVillain = styled.TouchableOpacity`
  width: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 56px;
  border-radius: 56px;
  background-color: ${colors.villain};
  padding: 0px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const ButtonAntihero = styled.TouchableOpacity`
  width: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 56px;
  border-radius: 56px;
  background-color: ${colors.antihero};
  padding: 0px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const ButtonAlien = styled.TouchableOpacity`
  width: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 56px;
  border-radius: 56px;
  background-color: ${colors.alien};
  padding: 0px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const ButtonHuman = styled.TouchableOpacity`
  width: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 56px;
  border-radius: 56px;
  background-color: ${colors.human};
  padding: 0px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const ContentInfo = styled.View`
  display: flex;
`;
export const TextName = styled.Text`
  font-size: 13px;
  color: ${colors.white};
  padding: 0px 10px;
  margin: 0px;
`;
export const TextValue = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  padding: 0px 10px;
  font-weight: 800;
`;

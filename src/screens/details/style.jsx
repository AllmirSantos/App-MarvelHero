import styled from "styled-components/native";
import { colors, fontSizes, fontWeights } from "../../theme";

export const container = styled.View`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const imageBackground = styled.Image`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  position: absolute;
`;
export const imageShadowBackground = styled.Image`
  width: 100%;
  display: flex;
  position: absolute;
  flex: 1;
  height: 100%;
`;
export const containerScroll = styled.ScrollView`
  width: 100%;
  display: flex;
`;
export const contentTextTop = styled.View`
  width: 100%;
  display: flex;
  margin-top: 65%;
`;

export const textNomeHero = styled.Text`
  width: 100%;
  display: flex;
  width: 100%;
  font-size: ${fontSizes.detailsNameHero};
  color: ${colors.white};
  font-weight: 800;
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
`;

export const infoDetails = styled.View`
  padding: 10px 20px;
`;

export const textDetailsInfo = styled.Text`
  font-size: ${fontSizes.homeSubtitle};
  color: ${colors.white};
  line-height: 18px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const contentAbility = styled.View`
  flex: 1;
  margin-bottom: 20px;
`;

export const textTitle = styled.Text`
  font-size: ${fontSizes.titleCategory};
  color: ${colors.white};
  font-weight: ${fontWeights.bold};
  margin-bottom: 20px;
  padding: 0px 20px;
`;

export const contentFilms = styled.View`
  margin-bottom: 30px;
`;

export const containerPage = styled.View`
  flex: 1;
  height: auto;
  width: 130px;
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
  width: auto;
  display: flex;
  font-size: 16px;
  color: ${colors.dark};
`;

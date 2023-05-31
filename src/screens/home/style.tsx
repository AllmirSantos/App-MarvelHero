import styled from "styled-components/native";
import { colors, fontSizes, fontWeights } from "../../theme";

export const container = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${colors.silver};
`;
export const containerScroll = styled.ScrollView`
  width: 100%;
  display: flex;
  margin-bottom: 70px;
`;

export const contentText = styled.View`
  width: 100%;
  display: flex;
`;
export const textH5 = styled.Text`
  width: 100%;
  display: flex;
  font-size: ${fontSizes.homeSubtitle};
  color: ${colors.grey};
  font-weight: 600;
  padding-right: 20px;
  padding-left: 20px;
`;

export const textH1 = styled.Text`
  width: 100%;
  display: flex;
  font-size: ${fontSizes.homeTitle};
  color: ${colors.dark};
  font-weight: 800;
  padding-top: 5px;
  padding-right: 20px;
  padding-left: 20px;
`;

export const contentList = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;
export const contentTextCategory = styled.View`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
`;
export const textCategoryTitle = styled.Text`
  color: ${colors.red};
  font-size: ${fontSizes.titleCategory};
  font-weight: ${fontWeights.bold};
`;
export const textCategoryViewAll = styled.Text`
  color: ${colors.grey};
  font-size: ${fontSizes.homeSubtitle};
`;

export const Loading = styled.View`
  width: 100%;
  height: 230px;
  display: flex;
  flex-direction: row;
`;

export const Skeleton = styled.View`
  width: 140px;
  height: 230px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 16px;
  overflow: hidden;
`;

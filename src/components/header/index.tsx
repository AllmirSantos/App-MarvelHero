import Menu from "../../assets/icons/Menu.svg";
import Logo from "../../assets/icons/Logo.svg";
import Arrow from "../../assets/icons/arrow.svg";
import Search from "../../assets/icons/Search.svg";
import * as S from "./style";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export function HeaderHome() {
  return (
    <>
      <S.headerHome>
        <TouchableOpacity>
          <Menu width="24" height="24" fill="none" />
        </TouchableOpacity>
        <Logo width="71" height="26" fill="none" />
        <TouchableOpacity>
          <Search width="24" height="24" fill="none" />
        </TouchableOpacity>
      </S.headerHome>
    </>
  );
}

export function HeaderDetails() {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <S.headerDetails>
      <TouchableOpacity onPress={handleGoBack}>
        <Arrow width="24" height="24" fill="none" />
      </TouchableOpacity>
    </S.headerDetails>
  );
}

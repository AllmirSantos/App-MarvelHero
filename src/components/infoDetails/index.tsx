import * as S from "./style";
import Age from "../../assets/icons/age.svg";
import Weight from "../../assets/icons/weight.svg";
import Height from "../../assets/icons/height.svg";
import Earth from "../../assets/icons/earth.svg";

export function InfoDetails({ age, weight, height, earth }) {
  return (
    <S.container>
      <S.buttonInfor>
        <Age width="26" height="26" fill="none" />
        <S.textInfor>{age}</S.textInfor>
      </S.buttonInfor>
      <S.buttonInfor>
        <Weight width="26" height="26" fill="none" />
        <S.textInfor>{weight}</S.textInfor>
      </S.buttonInfor>
      <S.buttonInfor>
        <Height width="26" height="26" fill="none" />
        <S.textInfor>{height}</S.textInfor>
      </S.buttonInfor>
      <S.buttonInfor>
        <Earth width="26" height="26" fill="none" />
        <S.textInfor>{earth}</S.textInfor>
      </S.buttonInfor>
    </S.container>
  );
}

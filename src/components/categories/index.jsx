import * as S from "./style";
import { TouchableOpacity } from "react-native";
import Hero from "../../assets/icons/hero.svg";
import Villain from "../../assets/icons/villain.svg";
import Antihero from "../../assets/icons/antihero.svg";
import Alien from "../../assets/icons/alien.svg";
import Human from "../../assets/icons/human.svg";

export function Categories({
  valueCharacters,
  valueCreators,
  valueComics,
  valueSeries,
  valueEvents,
}) {
  return (
    <S.Container>
      <S.ButtonHero activeOpacity={0.9}>
        <Hero width="26" height="26" fill="none" />
        <S.ContentInfo>
          <S.TextName>Personagens</S.TextName>
          <S.TextValue>{valueCharacters}</S.TextValue>
        </S.ContentInfo>
      </S.ButtonHero>
      <S.ButtonHuman activeOpacity={0.9}>
        <Human width="26" height="26" fill="none" />
        <S.ContentInfo>
          <S.TextName>Criadores</S.TextName>
          <S.TextValue>{valueCreators}</S.TextValue>
        </S.ContentInfo>
      </S.ButtonHuman>
      <S.ButtonVillain activeOpacity={0.9}>
        <Villain width="26" height="26" fill="none" />
        <S.ContentInfo>
          <S.TextName>Histórias em quadrinhos</S.TextName>
          <S.TextValue>{valueComics}</S.TextValue>
        </S.ContentInfo>
      </S.ButtonVillain>

      <S.ButtonAlien activeOpacity={0.9}>
        <Alien width="26" height="26" fill="none" />
        <S.ContentInfo>
          <S.TextName>Eventos</S.TextName>
          <S.TextValue>{valueEvents}</S.TextValue>
        </S.ContentInfo>
      </S.ButtonAlien>
      <S.ButtonAntihero activeOpacity={0.9}>
        <Antihero width="26" height="26" fill="none" />
        <S.ContentInfo>
          <S.TextName>Series</S.TextName>
          <S.TextValue>{valueSeries}</S.TextValue>
        </S.ContentInfo>
      </S.ButtonAntihero>
    </S.Container>
  );
}

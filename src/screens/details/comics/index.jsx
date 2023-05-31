import * as S from "../style";
import { ActivityIndicator, FlatList } from "react-native";
import { HeaderDetails } from "../../../components/header";
import { InfoDetails } from "../../../components/infoDetails";
import { CardInfo } from "../../../components/cardInfo";
import PercentageBar from "../../../components/percentageBar";

import { colors } from "../../../theme";

import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

export function DetailsComics() {
  const route = useRoute();
  const { id: charactersId } = route.params || {};

  const [movie, setMovie] = useState({});
  const [movieImage, setMovieImage] = useState({});
  const [creators, setCreators] = useState([]);
  const [prices, setPrices] = useState([]);
  const [stories, setStories] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const timeStamp = "1681411983";
  const apiKey = "c36ffe65080ff65bee37c51bb12b91cc";
  const md5 = "9c19027d3adbe716fd172eb230c5a63e";

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/comics/${charactersId}?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        setMovie(jsonParsed.data.results[0]);
        setMovieImage(jsonParsed.data.results[0].thumbnail);
        setCreators(jsonParsed.data.results[0].creators.items);
        setPrices(jsonParsed.data.results[0].prices);
        setStories(jsonParsed.data.results[0].stories.items);
        setEvents(jsonParsed.data.results[0].events.items);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderItem = ({ item }) => {
    return <CardInfo name={item.name} />;
  };
  const renderItemPrices = ({ item }) => {
    return <CardInfo name={`$ ${item.price}`} />;
  };

  return (
    <S.container>
      {loading ? (
        <S.container>
          <HeaderDetails />
          <S.imageBackground
            source={{
              uri: `${movieImage.path + "." + movieImage.extension}`,
            }}
          />
          <S.imageShadowBackground
            source={require("../../../assets/shadowDetails.png")}
          />
          <S.containerScroll>
            <S.contentTextTop>
              <S.textNomeHero>{movie?.title}</S.textNomeHero>
            </S.contentTextTop>
            <S.infoDetails>
              <S.textDetailsInfo>{movie?.description}</S.textDetailsInfo>
            </S.infoDetails>

            <S.contentFilms>
              <S.textTitle>Contagem de páginas</S.textTitle>

              <S.containerPage>
                <S.TextNameComics>{movie?.pageCount}</S.TextNameComics>
              </S.containerPage>
            </S.contentFilms>
            <S.contentFilms>
              <S.textTitle>Criadores</S.textTitle>
              <FlatList
                horizontal
                key={creators}
                data={creators}
                renderItem={renderItem}
              />
            </S.contentFilms>
            <S.contentFilms>
              <S.textTitle>Valores</S.textTitle>
              <FlatList
                horizontal
                key={prices}
                data={prices}
                renderItem={renderItemPrices}
              />
            </S.contentFilms>
            <S.contentFilms>
              <S.textTitle>Histórias</S.textTitle>
              <FlatList
                horizontal
                key={stories}
                data={stories}
                renderItem={renderItem}
              />
            </S.contentFilms>
          </S.containerScroll>
        </S.container>
      ) : (
        <ActivityIndicator size="large" color={colors.red} />
      )}
    </S.container>
  );
}

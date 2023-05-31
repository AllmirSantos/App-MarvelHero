import * as S from "./style";

import { FlatList, TouchableOpacity } from "react-native";
import { HeaderHome } from "../../components/header";
import { Categories } from "../../components/categories";
import {
  CardCharacters,
  CardComics,
  CardCreators,
  CardEvents,
  CardSeries,
} from "../../components/cards";
import { Skeleton } from "@rneui/themed";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export function Home({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [charactersTotal, setCharactersTotal] = useState([]);
  const [comics, setComics] = useState([]);
  const [comicsTotal, setComicsTotal] = useState([]);
  const [events, setEvents] = useState([]);
  const [eventsTotal, setEventsTotal] = useState([]);
  const [series, setSeries] = useState([]);
  const [seriesTotal, setSeriesTotal] = useState([]);
  const [creators, setCreators] = useState([]);
  const [creatorsTotal, setCreatorsTotal] = useState([]);
  const [loadingCharacters, setLoadingCharacters] = useState(false);
  const [loadingComics, setLoadingComics] = useState(false);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [loadingSeries, setLoadingSeries] = useState(false);
  const [loadingCreators, setLoadingCreators] = useState(false);

  const timeStamp = "1681411983";
  const apiKey = "c36ffe65080ff65bee37c51bb12b91cc";
  const md5 = "9c19027d3adbe716fd172eb230c5a63e";

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        setLoadingCharacters(true);
        setCharacters(jsonParsed.data.results);
        setCharactersTotal(jsonParsed.data.total);
      })
      .catch((error) => {
        console.log(error);
      }).finally;
  }, []);
  const renderItemCharacters = ({ item }) => {
    return (
      <CardCharacters
        name={item.name}
        image={`${item.thumbnail.path + "." + item.thumbnail.extension}`}
        id={item.id}
      />
    );
  };

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        setLoadingComics(true);
        setComics(jsonParsed.data.results);
        setComicsTotal(jsonParsed.data.total);
      })
      .catch((error) => {
        console.log(error);
      }).finally;
  }, []);
  const renderItemComics = ({ item }) => {
    return (
      <CardComics
        title={item.title}
        image={`${item.thumbnail.path + "." + item.thumbnail.extension}`}
        id={item.id}
        pageCount={item.pageCount}
        value={item.prices[0].price}
      />
    );
  };

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/events?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        setLoadingEvents(true);
        setEvents(jsonParsed.data.results);
        setEventsTotal(jsonParsed.data.total);
      })
      .catch((error) => {
        console.log(error);
      }).finally;
  }, []);
  const renderItemEventos = ({ item }) => {
    return (
      <CardEvents
        title={item.title}
        image={`${item.thumbnail.path + "." + item.thumbnail.extension}`}
        id={item.id}
      />
    );
  };

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/series?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        setLoadingSeries(true);
        setSeries(jsonParsed.data.results);
        setSeriesTotal(jsonParsed.data.total);
      })
      .catch((error) => {
        console.log(error);
      }).finally;
  }, []);
  const renderItemSeries = ({ item }) => {
    return (
      <CardSeries
        title={item.title}
        image={`${item.thumbnail.path + "." + item.thumbnail.extension}`}
        id={item.id}
      />
    );
  };

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/creators?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonParsed) => {
        setLoadingCreators(true);
        setCreators(jsonParsed.data.results);
        setCreatorsTotal(jsonParsed.data.total);
      })
      .catch((error) => {
        console.log(error);
      }).finally;
  }, []);
  const renderItemCreators = ({ item }) => {
    return (
      <CardCreators
        title={item.fullName}
        image={`${item.thumbnail.path + "." + item.thumbnail.extension}`}
        id={item.id}
      />
    );
  };

  const SkeletonLoading = () => (
    <S.Loading>
      <S.Skeleton>
        <Skeleton
          LinearGradientComponent={LinearGradient}
          animation="wave"
          width={140}
          height={230}
        />
      </S.Skeleton>
      <S.Skeleton>
        <Skeleton
          LinearGradientComponent={LinearGradient}
          animation="wave"
          width={140}
          height={230}
        />
      </S.Skeleton>
      <S.Skeleton>
        <Skeleton
          LinearGradientComponent={LinearGradient}
          animation="wave"
          width={140}
          height={230}
        />
      </S.Skeleton>
    </S.Loading>
  );

  const keyExtractor = (item) => item.id.toString();
  return (
    <S.container>
      <HeaderHome />
      <S.containerScroll>
        <S.contentText>
          <S.textH5 className="text-center">
            Bem vindo ao Marvel Heroes
          </S.textH5>
          <S.textH1 className="text-center">
            Informações do universo Marvel
          </S.textH1>
        </S.contentText>
        <Categories
          valueCharacters={charactersTotal}
          valueCreators={creatorsTotal}
          valueComics={comicsTotal}
          valueEvents={eventsTotal}
          valueSeries={seriesTotal}
        />

        <S.contentList>
          <S.contentTextCategory>
            <S.textCategoryTitle>Personagens</S.textCategoryTitle>
            <TouchableOpacity activeOpacity={0.9}>
              <S.textCategoryViewAll>Ver tudo</S.textCategoryViewAll>
            </TouchableOpacity>
          </S.contentTextCategory>
          {loadingCharacters ? (
            <FlatList
              style={{
                height: 230,
              }}
              horizontal
              data={characters}
              renderItem={renderItemCharacters}
              keyExtractor={keyExtractor}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <SkeletonLoading />
          )}
        </S.contentList>

        <S.contentList>
          <S.contentTextCategory>
            <S.textCategoryTitle>Histórias em quadrinhos</S.textCategoryTitle>
            <TouchableOpacity activeOpacity={0.9}>
              <S.textCategoryViewAll>Ver tudo</S.textCategoryViewAll>
            </TouchableOpacity>
          </S.contentTextCategory>
          {loadingComics ? (
            <FlatList
              style={{
                height: 230,
              }}
              horizontal
              data={comics}
              renderItem={renderItemComics}
              keyExtractor={keyExtractor}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <SkeletonLoading />
          )}
        </S.contentList>

        <S.contentList>
          <S.contentTextCategory>
            <S.textCategoryTitle>Eventos</S.textCategoryTitle>
            <TouchableOpacity activeOpacity={0.9}>
              <S.textCategoryViewAll>Ver tudo</S.textCategoryViewAll>
            </TouchableOpacity>
          </S.contentTextCategory>
          {loadingEvents ? (
            <FlatList
              style={{
                height: 230,
              }}
              horizontal
              data={events}
              renderItem={renderItemEventos}
              keyExtractor={keyExtractor}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <SkeletonLoading />
          )}
        </S.contentList>

        <S.contentList>
          <S.contentTextCategory>
            <S.textCategoryTitle>Series</S.textCategoryTitle>
            <TouchableOpacity activeOpacity={0.9}>
              <S.textCategoryViewAll>Ver tudo</S.textCategoryViewAll>
            </TouchableOpacity>
          </S.contentTextCategory>
          {loadingSeries ? (
            <FlatList
              style={{
                height: 230,
              }}
              horizontal
              data={series}
              renderItem={renderItemSeries}
              keyExtractor={keyExtractor}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <SkeletonLoading />
          )}
        </S.contentList>

        <S.contentList>
          <S.contentTextCategory>
            <S.textCategoryTitle>Criadores</S.textCategoryTitle>
            <TouchableOpacity activeOpacity={0.9}>
              <S.textCategoryViewAll>Ver tudo</S.textCategoryViewAll>
            </TouchableOpacity>
          </S.contentTextCategory>
          {loadingCreators ? (
            <FlatList
              style={{
                height: 230,
              }}
              horizontal
              data={creators}
              renderItem={renderItemCreators}
              keyExtractor={keyExtractor}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <SkeletonLoading />
          )}
        </S.contentList>
      </S.containerScroll>
    </S.container>
  );
}

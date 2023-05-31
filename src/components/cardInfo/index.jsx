import { Text, View } from "react-native";
import * as S from "./style";
import React, { Component } from "react";

export function CardInfo({ name }) {
  return (
    <S.container>
      <S.TextNameComics>{name}</S.TextNameComics>
    </S.container>
  );
}

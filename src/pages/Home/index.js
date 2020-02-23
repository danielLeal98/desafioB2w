import React, { Component } from 'react';
import { Container, Title, ImageBackground, Botao, BotaoTexto,ViewButton, ViewInfo, TextInfo, ImageLogo, ViewImage } from './styles';
import { View, StatusBar} from 'react-native';
import styled from 'styled-components/native';

export default class Home extends Component {
   constructor(props){
        super(props);
        this.state = {} ;
    }

  callPlanets = () => {
        const {navigation} = this.props;
        navigation.navigate('Planets');
  }
 
  render() {
    return (
      <Container>
      <StatusBar backgroundColor="black" barStyle="light-content" />
        <ImageBackground source={require('../../../assets/backGroundImageHome.png')}>        
          <ViewImage>
            <ImageLogo source={require('../../../assets/logo.png')}/>
          </ViewImage>
          <ViewButton>
            <Botao onPress={this.callPlanets}>
              <BotaoTexto>START</BotaoTexto>
            </Botao>
          </ViewButton>
          <ViewInfo>
            <TextInfo>Desafio B2W - Daniel Matheus</TextInfo>
          </ViewInfo>
        </ImageBackground>
      </Container>
      )
  }
}
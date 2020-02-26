import React, { Component } from 'react';
import { Container, Title, ImageBackground, Botao, BotaoTexto,ViewButton, ViewInfo, TextInfo, ImageLogo, ViewImage } from './styles';
import { View, StatusBar,AsyncStorage} from 'react-native';
import styled from 'styled-components/native';
import NetInfo from "@react-native-community/netinfo";
import SplashScreen from 'react-native-splash-screen';

export default class Home extends Component {
   constructor(props){
        super(props);        
        this.state = {netStatus: 0};
    }
  callPlanets = () => {
    const {navigation} = this.props;
    navigation.navigate('Planets');
  }
  componentDidMount(){
    SplashScreen.hide();
    const unsubscribe = NetInfo.addEventListener(state => {          
      this.setState({netStatus: Number(state.isConnected)}); 
      this.setInfoNet(this.state.netStatus);
    });
  }
   async setInfoNet(netStatus) {
    try {
      await AsyncStorage.setItem('netStatus', netStatus.toString())
    } catch (error) {
      console.log('Error saving data' + error);
    }
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
console.disableYellowBox = true;
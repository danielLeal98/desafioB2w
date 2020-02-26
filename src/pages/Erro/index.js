import React, { Component } from 'react';
import { View } from 'react-native';
import {Container,ImageBackground,Botao,BotaoTexto,ViewButton,ViewTitle,TextTitle} from './styles';
import NetInfo from "@react-native-community/netinfo";

export default class Erro extends Component {
  constructor(props){
    super(props);
    this.state = {netStatus: 0};
  }
  callHome = () => {
    const {navigation} = this.props;
    navigation.navigate('Home');
  }
  callPlanets = () => {
    const {navigation} = this.props;
    if(this.state.netStatus == 1){      
      navigation.navigate('Planets');
    } else {
      navigation.navigate('Erro');
    }
  }
   componentDidMount(){
    const unsubscribe = NetInfo.addEventListener(state => {                
      this.setState({netStatus: Number(state.isConnected)});      
    });
  }
  render() {        
    return(
      <Container>
        <ImageBackground source={require('../../../assets/error.gif')}>   
          <TextTitle>Ocorreu um erro.{'\n'}
          Verifique sua conexão e tente novamente.
          </TextTitle>     
          <ViewButton>         
            <Botao onPress={this.callHome}>
              <BotaoTexto>BACK</BotaoTexto>
            </Botao>
            <Botao onPress={this.callPlanets}>
              <BotaoTexto>RETRY</BotaoTexto>
            </Botao>
          </ViewButton>        
        </ImageBackground>
      </Container>
    ) 
  }
}
console.disableYellowBox = true;
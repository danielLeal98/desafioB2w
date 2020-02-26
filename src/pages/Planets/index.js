import React, { Component } from 'react';
import { Container,ImageBackground,Botao,BotaoTexto,ViewButton,ViewInfoPlanet,TextPlanet,TextPlanetInfo,ViewEmpty,ViewInfoPlanet2,CardMain,TextPopulation,TextClimate,TextTerrain,
PlanetData,PopulationData,ClimateData,TerrainData,TextFilm,FilmData,ViewLoader,ImageLoader } from './styles';
import styled from 'styled-components/native';
import { Card,ListItem, Icon } from 'react-native-elements';
import { View, StatusBar,AsyncStorage} from 'react-native';
import Erro from '../Erro';
import NetInfo from "@react-native-community/netinfo";

export default class Planets extends Component {
  constructor(props){
      super(props)
      this.state = {
        error: false,
        loading:'', name: '', population: '', climate:'', terrain: '', films: [], netStatus:0
      } 
       this.getPlanet = this.getPlanet.bind(this); 
  }

  componentDidMount() {
    NetInfo.fetch().then(state => {      
      this.setState({loading: true});
      if(state.isConnected){
        this.getPlanet();
      } else {
        this.callError();
      }
    });
  }

  callHome = () => {
    const {navigation} = this.props;
    navigation.replace('Home');
  }

  callError = () => {
    const {navigation} = this.props;
    navigation.replace('Erro');
  }

  getPlanet(){    
      this.setState({name: '', population: '', climate: '', terrain: '', films: '', loading: true, error:false});
      let idPlanet = Math.floor(Math.random() * 61 + 1);
      fetch(`https://swapi.co/api/planets/${idPlanet}`)    
        .then((r)=>r.json())
        .then((json)=>{
          let s = this.state;
          s.name = json.name;
          s.population = json.population;            
          s.climate = json.climate;
          s.terrain = json.terrain;
          s.films = json.films.length;
          s.loading = false;  
          s.error = false;   
          this.setState(s);
        }).catch(error =>{
            this.setState({                        
            error: true,
            loading: false
          });
        });
   }
  
  render() {
    if(this.state.error == true){
     this.callError();
    }
    
    if(this.state.loading){
        return (          
          <Container>
            <StatusBar backgroundColor="black" barStyle="light-content" />      
            <CardMain>             
              <ImageLoader source={require('../../../assets/stormtrooper.gif')}/>   
            </CardMain>                                                                    
          </Container>
         )
      } else {
        return (
          <Container>
          <StatusBar backgroundColor="black" barStyle="light-content" />
              <ImageBackground source={require('../../../assets/backgroundPlanets.gif')}>   
              <CardMain>
                <TextPlanet>
                  PLANET
                </TextPlanet>
                <PlanetData>{this.state.name}</PlanetData>
                <TextPlanetInfo>
                  <TextPopulation>POPULATION: </TextPopulation><PopulationData>{this.state.population}</PopulationData>{'\n'}
                  <TextClimate>CLIMATE: </TextClimate><ClimateData>{this.state.climate}</ClimateData>{'\n'}
                  <TextTerrain>TERRAIN: </TextTerrain><TerrainData>{this.state.terrain}</TerrainData>{'\n'}                       
                </TextPlanetInfo>
                <TextFilm>Featured in <FilmData>{this.state.films}</FilmData> Films</TextFilm>
              </CardMain>              
                <ViewButton>
                  <Botao onPress={this.callHome}>
                    <BotaoTexto>BACK</BotaoTexto>
                  </Botao>
                  <Botao onPress={this.getPlanet}>
                    <BotaoTexto>NEXT</BotaoTexto>
                  </Botao>
                </ViewButton>
              </ImageBackground>
          </Container>
        )
    }
  }
}
console.disableYellowBox = true;
import React, { Component } from 'react';
import { Container,ImageBackground,Botao,BotaoTexto,ViewButton,ViewInfoPlanet,TextPlanet,TextPlanetInfo,ViewEmpty,ViewInfoPlanet2,CardMain,TextPopulation,TextClimate,TextTerrain,
PlanetData,PopulationData,ClimateData,TerrainData,TextFilm,FilmData,ViewLoader,ImageLoader } from './styles';
import styled from 'styled-components/native';
import { Card,ListItem, Icon } from 'react-native-elements';
import { View, StatusBar} from 'react-native';

export default class Planets extends Component {
  constructor(props){
      super(props)
      this.state = {
        error: false,
        loading:'', name: '', population: '', climate:'', terrain: '', films: []
      }
      this.getPlanet = this.getPlanet.bind(this);      
    }

   getPlanet(){
     this.setState({name: '', population: '', climate: '', terrain: '', films: '', loading: true});
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
            this.setState(s);
          })
   }

    componentDidMount() {
        this.getPlanet()
    }

        
    callHome = () => {
      const {navigation} = this.props;
      navigation.navigate('Home');
    }

  render() {
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

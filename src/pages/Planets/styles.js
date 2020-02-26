import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;
export const ImageBackground = styled.ImageBackground`
    flex: 1;
    width: 100%;
    height: 100%;
`;
export const Botao = styled.TouchableOpacity`
    background-color: #191919;
    border-radius: 100px;    
    width: auto;
    border: 2px solid #FCDF2B;
    font-size: 24px; 
    margin: 12px 32px 12px 35px;
`;
export const BotaoTexto = styled.Text`
    font-size: 15px;
    color: #FFFFFF;
    text-align: center;
    margin: 12px 32px 12px 32px;    
    font-family: Montserrat-Bold;
`;
export const ViewButton = styled.View`
    flexDirection: row;
    position: absolute
    bottom:0;
    align-items: center;   
    height: auto; 
`;
export const CardMain = styled.View`
    margin: auto 15px auto 12px;
    width: auto;
    height: auto;
    font-family: Montserrat-Medium;
    border-radius: 30px;
    background-color: #191919
    opacity: 0.9;
`;
export const TextPlanet = styled.Text`
    font-size: 18px;
    color: #ffffff;
    text-align: center;
    font-family: Montserrat-Light;
    marginTop:10px;
`;
export const TextPlanetInfo = styled.Text`
    color: #FCDF2B;    
    justify-content: space-around;
    margin: 12px 32px 12px 32px;
`;
export const TextPopulation = styled.Text`
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    font-family: Montserrat-Light;
`;
export const TextClimate = styled.Text`
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    font-family: Montserrat-Light;
`;
export const TextTerrain = styled.Text`
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    font-family: Montserrat-Light;
`;
export const TextFilm = styled.Text`
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    font-family: Montserrat-Light;
    marginBottom:10px;
`;
export const PlanetData = styled.Text`
    font-size: 24px;
    color: #FCDF2B;
    text-align: center;
    font-family: Montserrat-Medium;
    fontWeight: bold

`;
export const PopulationData = styled.Text`
    font-size: 18px;
    color: #FCDF2B;
    text-align: right;
    font-family: Montserrat-Medium;
    line-height: 30px;        
`;
export const ClimateData = styled.Text`
    font-size: 18px;
    color: #FCDF2B;
    text-align: justify;
    font-family: Montserrat-Medium;
    line-height: 30px;
`;
export const TerrainData = styled.Text`
    font-size: 18px;
    color: #FCDF2B;
    text-align: center;
    font-family: Montserrat-Medium;
    line-height: 30px;
`;
export const FilmData = styled.Text`
    font-size: 18px;
    color: #FCDF2B;
    text-align: center;
    font-family: Montserrat-Medium;
`;
export const ViewLoader = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;  
    margin: auto 15px auto 12px;
    width: auto;
    height: auto;  
`;
export const ImageLoader = styled.Image`
    flex: 1;
    justify-content: center;
    align-items: center;
    backgroundColor: transparent;
`;

export const GeneralStatusBarColor = () => <View />;
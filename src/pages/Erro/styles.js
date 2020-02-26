import styled from 'styled-components/native';

export const Container = styled.View`
	flex:1;
    backgroundColor: black;
`;
export const ImageBackground = styled.ImageBackground`
     flex:1;
    width:100%;
    height:100%;    
    backgroundColor:#000;
`;
export const Botao = styled.TouchableOpacity`
    background-color: #191919;
    border-radius: 100px;    
    width: auto;
    border: 2px solid #FCDF2B;
    font-size: 24px; 
    margin: 12px 32px 12px 35px;
`;
export const ViewTitle = styled.View`         
    height: auto; 
`;
export const TextTitle = styled.Text`
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
    margin:50px;
    font-family: Montserrat-Bold;
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

export const GeneralStatusBarColor = () => <View />;
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
     resizeMode: cover;
`;
export const ImageBackground = styled.ImageBackground`
    flex: 1;
    width: 100%;
    height: 100%;
`;
export const ViewImage = styled.View`    
	justify-content: center;
	align-items: center;   
`;
export const ImageLogo = styled.Image`
    width: 52%;
    height: 30%;
    marginTop:80px;
`;
export const Botao = styled.TouchableOpacity`
    background-color: black;
    border-radius: 100px;    
    width: auto;
    border: 2px solid #FCDF2B;
    font-size: 24px; 
    margin: 12px 20px 12px 20px;
`;
export const BotaoTexto = styled.Text`
    font-size: 15px;
    color: #FFFFFF;
    text-align: center;
    margin: 12px 32px 12px 32px;    
    font-family: Montserrat-Bold;
`;
export const ViewButton = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    marginTop:10px;
`;
export const ViewInfo = styled.View`
    justify-content: flex-end;
    align-items: center;    
`;
export const TextInfo = styled.Text`
	font-size: 15px;
	font-weight: bold;
	color: white;
    opacity: 0.5;
    margin:10px;
    font-family: Montserrat-Bold;
`;
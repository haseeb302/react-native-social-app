/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 10px;
`;

export const Card = styled.View`
    background-color: #f8f8f8;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 10px;
`;

export const UserInfoContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
`;

export const UserInfo = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`;

export const UserImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const Username = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;

export const Time = styled.Text`
    font-size: 12px;
    color: #666;
`;

export const PostText = styled.Text`
    font-size: 16px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
`;

export const Divider = styled.View`    
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    width: 92%;
    align-self: center;
    margin-top: 15px;
`;

export const PostImg = styled.Image`
    width: 100%;
    height: 250px;
    /* margin-top: 15px; */
`;

export const InteractionContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 15px;
`;

export const Interaction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 2px 5px;
    background-color: ${props => props.active ? '#2e64e559' : 'transparent'};
`;

export const InteractionText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${props => props.active ? '#2e64e5' : '#333'};
    margin-top: 5px;
    margin-left: 5px;
`;
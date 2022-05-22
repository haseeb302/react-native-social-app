/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Container,
    Card,
    UserInfoContainer,
    UserInfo,
    UserImg,
    Username,
    Time,
    PostText,
    PostImg,
    InteractionContainer,
    Interaction,
    InteractionText,
    Divider,
} from '../styles/FeedStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Post({ post }) {
    return (
        <Card>
            <UserInfoContainer>
                <UserImg source={post.userImg} />
                <UserInfo>
                    <Username>{post.userName}</Username>
                    <Time>{post.postTime}</Time>
                </UserInfo>
            </UserInfoContainer>
            <PostText>{post.post}</PostText>
            {post.postImg != 'none' ? <PostImg source={post.postImg} /> : <Divider />}
            <InteractionContainer>
                <Interaction active={post.liked}>
                    <Ionicons
                        name={post.liked ? "heart" : "heart-outline"}
                        size={25}
                        color={post.liked ? "#2e64e5" : "#333"}
                    />
                    <InteractionText active={post.liked}>{post.likes}</InteractionText>
                </Interaction>
                <Interaction>
                    <Ionicons name="md-chatbubble-outline" size={25} />
                    <InteractionText>{post.comments}</InteractionText>
                </Interaction>
            </InteractionContainer>
        </Card>
    )
}
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import moment from 'moment';
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
import { AuthContext } from '../navigation/AuthProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProgressiveImage from './ProgressiveImage';

export default function Post({ post, onDelete }) {
    const { user } = useContext(AuthContext);

    return (
        <Card>
            <UserInfoContainer>
                <UserImg source={{ uri: post.userImg }} />
                <UserInfo>
                    <Username>{post.userName}</Username>
                    <Time>{moment(post.postTime.toDate()).fromNow()}</Time>
                </UserInfo>
            </UserInfoContainer>
            <PostText>{post.post}</PostText>
            {/* {post.postImg != null ? <PostImg source={{ uri: post.postImg }} /> : <Divider />} */}
            {post.postImg != null ? (
                <ProgressiveImage
                    defaultImageSource={require('../../assets/default-img.jpg')}
                    source={{ uri: post.postImg }}
                    style={{ width: '100%', height: 250 }}
                    resizeMode='cover'
                />
            ) : <Divider />}
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
                {user.uid === post.userId ? (
                    <Interaction onPress={() => onDelete(post.id)}>
                        <Ionicons name="md-trash-bin" size={25} />
                    </Interaction>
                ) : null}
            </InteractionContainer>
        </Card>
    )
}
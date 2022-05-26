/* eslint-disable prettier/prettier */
import { Alert, FlatList, SafeAreaView, View, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../navigation/AuthProvider';

import { Container } from '../styles/FeedStyles';
import Post from '../components/Post';

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const postss = [
    {
        id: '1',
        userName: 'Jenny Doe',
        userImg: require('../../assets/users/user-3.jpg'),
        postTime: '4 mins ago',
        post:
            'Hey there, this is my test for a post of my social app in React Native.',
        postImg: require('../../assets/posts/post-img-3.jpg'),
        liked: true,
        likes: '14',
        comments: '5',
    },
    {
        id: '2',
        userName: 'John Doe',
        userImg: require('../../assets/users/user-1.jpg'),
        postTime: '2 hours ago',
        post:
            'Hey there, this is my test for a post of my social app in React Native.',
        postImg: 'none',
        liked: false,
        likes: '8',
        comments: '0',
    },
    {
        id: '3',
        userName: 'Ken William',
        userImg: require('../../assets/users/user-4.jpg'),
        postTime: '1 hours ago',
        post:
            'Hey there, this is my test for a post of my social app in React Native.',
        postImg: require('../../assets/posts/post-img-2.jpg'),
        liked: true,
        likes: '1',
        comments: '0',
    },
    {
        id: '4',
        userName: 'Selina Paul',
        userImg: require('../../assets/users/user-6.jpg'),
        postTime: '1 day ago',
        post:
            'Hey there, this is my test for a post of my social app in React Native.',
        postImg: require('../../assets/posts/post-img-4.jpg'),
        liked: true,
        likes: '22',
        comments: '4',
    },
    {
        id: '5',
        userName: 'Christy Alex',
        userImg: require('../../assets/users/user-7.jpg'),
        postTime: '2 days ago',
        post:
            'Hey there, this is my test for a post of my social app in React Native.',
        postImg: 'none',
        liked: false,
        likes: '0',
        comments: '0',
    },
];

const HomeScreen = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);
    const { user, logout } = useContext(AuthContext);

    useEffect(() => {
        fetchPosts();
    }, []);

    useEffect(() => {
        fetchPosts();
        setDeleted(false);
    }, [deleted]);

    const fetchPosts = async () => {
        try {
            let list = [];
            await firestore().collection('posts')
                .orderBy('postTime', 'desc')
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const { post, postImg, postTime, likes, comments, userId } = doc.data();
                        list.push({
                            id: doc.id,
                            // eslint-disable-next-line no-undef
                            userId: userId,
                            userName: 'Jon Doe Hardcoded',
                            userImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
                            postTime: postTime,
                            post: post,
                            postImg: postImg,
                            liked: false,
                            likes: likes,
                            comments: comments,
                        });
                    });
                });
            setPosts(list);
            if (loading) {
                setLoading(false);
            }
        }
        catch (e) {
            console.log(e);
        }
    };

    const confirmDelete = (postId) => {
        Alert.alert('Delete Post',
            'Are you sure you want to delete this post?',
            [
                {
                    text: 'Cancel',
                    onPress: () => { },
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => deletePost(postId),
                    style: 'destructive',
                },
            ],
            { cancelable: false }
        );
    };

    const deletePostData = (postId) => {
        firestore()
            .collection('posts')
            .doc(postId)
            .delete()
            .then(() => {
                Alert.alert('Post Deleted', 'Post has been deleted successfully');
                setDeleted(true);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const deletePost = (postId) => {
        firestore()
            .collection('posts')
            .doc(postId)
            .get()
            .then((documentSnapshot) => {
                if (documentSnapshot.exists) {
                    const { postImg } = documentSnapshot.data();
                    if (postImg != null) {
                        const storageRef = storage().refFromURL(postImg);
                        const imageRef = storage().ref(storageRef.fullPath);
                        imageRef.delete().then(() => {
                            deletePostData(postId);
                        }).catch((e) => {
                            console.log(e);
                        });
                    }
                    else {
                        deletePostData(postId);
                    }
                }
            });
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container>
                {loading ? (
                    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center' }}>
                        <SkeletonPlaceholder>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                                <View style={{ marginLeft: 20 }}>
                                    <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                                    <View
                                        style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 10, marginBottom: 20 }}>
                                <View style={{ width: 300, height: 20, borderRadius: 4 }} />
                                <View style={{ marginTop: 6, width: 250, height: 20, borderRadius: 4 }} />
                                <View style={{ marginTop: 6, width: 350, height: 200, borderRadius: 4 }} />
                            </View>
                        </SkeletonPlaceholder>
                        <SkeletonPlaceholder>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                                <View style={{ marginLeft: 20 }}>
                                    <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                                    <View
                                        style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 10, marginBottom: 20 }}>
                                <View style={{ width: 300, height: 20, borderRadius: 4 }} />
                                <View style={{ marginTop: 6, width: 250, height: 20, borderRadius: 4 }} />
                                <View style={{ marginTop: 6, width: 350, height: 200, borderRadius: 4 }} />
                            </View>
                        </SkeletonPlaceholder>
                        <SkeletonPlaceholder>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                                <View style={{ marginLeft: 20 }}>
                                    <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                                    <View
                                        style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 10, marginBottom: 20 }}>
                                <View style={{ width: 300, height: 20, borderRadius: 4 }} />
                                <View style={{ marginTop: 6, width: 250, height: 20, borderRadius: 4 }} />
                                <View style={{ marginTop: 6, width: 350, height: 200, borderRadius: 4 }} />
                            </View>
                        </SkeletonPlaceholder>
                    </ScrollView>
                ) : (
                    <FlatList
                        data={posts}
                        renderItem={({ item }) => <Post post={item} onDelete={confirmDelete} />}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                )}
            </Container>
        </SafeAreaView>
    );
};

export default HomeScreen;

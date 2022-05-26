/* eslint-disable prettier/prettier */
import { ActivityIndicator, Alert, Platform, StyleSheet, Text, View } from 'react-native';
import React, { useState, useContext } from 'react';
import ActionButton from 'react-native-action-button';
import ImagePicker from 'react-native-image-crop-picker';
import { InputContainer, InputField, AddImage, SubmitButton, StatusContainer, SubmitButtonText } from '../styles/AddPostStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import { AuthContext } from '../navigation/AuthProvider';

const AddPostScreen = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [post, setPost] = useState(null);
    const { user } = useContext(AuthContext);

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 1200,
            height: 780,
            cropping: true,
        }).then((image) => {
            console.log(image);
            const imageUrl = Platform.OS === 'ios' ? image.sourceURL : image.path;
            setImage(imageUrl);
        }).catch(err => console.log(err));
    };

    const photoFromGallery = () => {
        ImagePicker.openPicker({
            width: 1200,
            height: 780,
            cropping: true,
        }).then((image) => {
            console.log(image);
            const imageUrl = Platform.OS === 'ios' ? image.sourceURL : image.path;
            setImage(imageUrl);
        }).catch(err => console.log(err));
    };

    const submitPost = async () => {
        let imageUrl = null;

        if (image !== null) {
            imageUrl = await uploadImage();
        }

        firestore().collection('posts')
            .add({
                userId: user.uid,
                post: post,
                postImg: imageUrl,
                postTime: firestore.Timestamp.fromDate(new Date()),
                likes: 0,
                comments: 0,
            })
            .then(() => {
                setPost(null);
                Alert.alert('Post Uploaded', 'Your post has been uploaded successfully');
                navigation.navigate('Fakebook');
            })
            .catch((e) => console.log(e));
    };

    const uploadImage = async () => {
        const uploadUri = image;
        let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

        // const fileExtension = filename.split('.').pop();
        // const name = filename.split('.').slice(0, -1).join('.');
        // filename = name + Date.now() + '.' + fileExtension;

        setUploading(true);
        setTransferred(0);

        const storageRef = storage().ref(`photos/${filename}`);
        const task = storageRef.putFile(uploadUri);

        task.on("state_changed", taskSnapshot => {
            setTransferred(
                Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100
            );
        });

        try {
            await task;

            const url = await storageRef.getDownloadURL();

            setUploading(false);
            setImage(null);

            return url;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <InputContainer>
                {image != null ? <AddImage source={{ uri: image }} /> : null}
                <InputField
                    placeholder="Share your thoughts.."
                    multiline numberOfLines={4}
                    value={post}
                    onChangeText={(content) => setPost(content)}
                />
                {uploading ? (
                    <StatusContainer>
                        <Text>{transferred}</Text>
                        <ActivityIndicator size="small" color="#0000ff" />
                    </StatusContainer>
                ) : (
                    <SubmitButton onPress={submitPost}>
                        <SubmitButtonText>Post</SubmitButtonText>
                    </SubmitButton>
                )}
            </InputContainer>
            <ActionButton buttonColor='rgba(231,76,60,1)'>
                <ActionButton.Item title='Take Photo' buttonColor='#9b59b6' onPress={takePhotoFromCamera}>
                    <Icon name='camera-outline' style={{ fontSize: 20, color: 'white', height: 22 }} />
                </ActionButton.Item>
                <ActionButton.Item title='Choose Photo' buttonColor='#3498db' onPress={photoFromGallery}>
                    <Icon name='md-images-outline' style={{ fontSize: 20, color: 'white', height: 22 }} />
                </ActionButton.Item>
            </ActionButton>
        </View>
    );
};

export default AddPostScreen;

const styles = StyleSheet.create({});
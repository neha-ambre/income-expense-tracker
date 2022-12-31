import React, { useState,useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button, Modal, TouchableOpacity } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

function ImageInc() {

  const refContainer = useRef();
  const [dimensions, setDimensions] = 
    useState({ width: 0, height: 0 });
  useEffect(() => {
    if (refContainer.current) {
      setDimensions({
        width: refContainer.current.offsetWidth,
        height: refContainer.current.offsetHeight,
      });
    }
  }, []);


  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState('');
  const [isImgModalVisible, setVisibilityOfImgModal] = useState(false);


  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

  return (
    // <View style={styles.screen}>
    //   <View style={styles.buttonContainer}>
    //     <Button onPress={showImagePicker} title="Select an image" />
    //     <Button onPress={openCamera} title="Open camera" />
    //   </View>

    //   <View style={styles.imageContainer}>
    //     {
    //       pickedImagePath !== '' && <Image
    //         source={{ uri: pickedImagePath }}
    //         style={styles.image}
    //       />
    //     }
    //   </View>
    // </View>
          
    <View style={styles.imgContainer}>
         
          {/* <Image source = {{uri :pickedImagePath}}
    style = {{width: '100%', height: 200}} onPress={()=>{setVisibili}}></Image> */}
          {/* <Modal            
          animationType = {"fade"}  
          transparent = {false}  
          visible = {isImgModalVisible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
              <View style = {styles.modal}>  
                <Button onPress={showImagePicker} title="Select an image" />
                <Button onPress={openCamera} title="Open camera" />
              <Button title="Close" onPress = {() => {  
                 setVisibilityOfImgModal(!isImgModalVisible)
                 }}/>  
          </View>  
        </Modal>   */}

          <Modal
            animationType="slide"
            transparent
            visible={isImgModalVisible}
            presentationStyle="overFullScreen"
            onDismiss={() => {
              setVisibilityOfCatModal(!isImgModalVisible);
            }}
          >
            <View style={styles.viewWrapper}>
              <View style={styles.modalView}>
                <View style={styles.imgModalInContainer}>
                  <Button onPress={showImagePicker} title="Select an image" />
                  <Button onPress={openCamera} title="Open camera" />
                </View>

                <Button
                  title="Close"
                  onPress={() => {
                    setVisibilityOfImgModal(!isImgModalVisible);
                  }}
                />
              </View>
            </View>
          </Modal>
          <TouchableOpacity
            onPress={() => {
              console.log("image clicked");
              setVisibilityOfImgModal(true);
            }}
          >
            {pickedImagePath !== "" && (
              <Image
                source={{ uri: pickedImagePath }}
                style={{ width: "100%", height: 200 }}
                onPress={() => {
                  console.log("image clicked");
                  setVisibilityOfImgModal(true);
                }}
              />
            )}
          </TouchableOpacity>
    </View>
  );
}

// Kindacode.com
// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    marginTop: 5,
  },
  imgButtonContainer: {
    width: 400,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  imageContainer: {
    padding: 30,
  },
  imgModalInContainer: {
    flexDirection: "row",
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: "cover",
  },
});

export default ImageInc;
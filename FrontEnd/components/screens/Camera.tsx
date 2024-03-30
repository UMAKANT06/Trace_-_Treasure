import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker from expo
import BackSurface from '../common/BackSurface';
import { Color, Border } from '@/constants/Colors';
import * as DocumentPicker from 'expo-document-picker';

const Camera: React.FC = () => {
  const handleUploadPress = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Allow picking all types of files
      });

      // if (result.type === 'success') {
      //   console.log('File picked:', result.uri);
      //   // Handle the picked file here (e.g., upload it to a server)
      // } else {
      //   console.log('File picking cancelled');
      // }
    } catch (error) {
      console.error('Error picking file:', error);
    }
  };

  const handleTakePhotoPress = async () => {
    // Open device camera for taking a photo
    // You need to implement this functionality using the ImagePicker API
    // For example:
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
  };

  return (
    <BackSurface surfaceStyle={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.cardContainer} onPress={handleUploadPress}>
          <LinearGradient
            style={styles.card}
            locations={[0, 0.39, 1.3]}
            colors={["#bdbcff", "#d2d1ff", "#e2e1ff"]}
          >
            <Text style={styles.text}>UPLOAD</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer2} onPress={handleTakePhotoPress}>
          <LinearGradient
            style={styles.card2}
            locations={[0, 0.39, 1.3, 2.9]}
            colors={["#ff9557", "#fec6a5", "#fdd0b6", "#ffe7d9"]}
          >
            <Text style={styles.text2}>TAKE PHOTO</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </BackSurface>
  );
};

const styles = StyleSheet.create({
  text2: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#0c0e19',
  },
  cardContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  card: {
    width: 350,
    height: 200,
    borderRadius: Border.br_5xl,
    overflow: "hidden",
  },
  cardContainer2: {
    alignItems: 'center',
    marginTop: 50,
  },
  card2: {
    width: 350,
    height: 200,
    borderRadius: Border.br_5xl,
    overflow: "hidden",
  },
});

export default Camera;

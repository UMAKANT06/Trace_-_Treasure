import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker from expo
import BackSurface from '../common/BackSurface';
import { Color, Border } from '@/constants/Colors';
import * as DocumentPicker from 'expo-document-picker';
import { API_URL } from '@/context/auth';
import axios from "axios";

interface MyDocumentValues {
  Branch: string;
  Semester: number;
  Role: string;
  // Document: Buffer|null;
}

const Camera: React.FC = () => {
  const handleUploadPress = async (values: MyDocumentValues,) => {
    try {
      values.Branch = "CSE";
      values.Semester=3;
      values.Role="Core";
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });
      // const file: File = new File([result.uri], result.name || 'Untitled.pdf', {
      //   type: 'application/pdf',
      // });
      // values.Document=file;
      const logValues = {
        Branch: values.Branch,
        Semester: values.Semester,
        Role: values.Role,
        // Document: values.Document
      };
      console.log(logValues);
      const response=await axios.post(`${API_URL}/uploadDocumnets//upload`,logValues);
      alert(response.data.message);
      console.log(response.data.message);

     console.log(result);
    } catch (error) {
      console.error('Error picking file:', error);
    }
  };

  const handleTakePhotoPress = async () => {
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

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.welcome}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Let’s log in. Apply to jobs!</Text>
      
      <TextInput 
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#ccc"
      />
      <TextInput 
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Homepage')}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.textContainer}>
      <View style={styles.line} />
      <Text style={styles.text}>Or continue with</Text>
      <View style={styles.line} />
    </View>
     
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity>
        <Text style={styles.registerText}>
          Haven’t an account? <Text style={styles.registerLink}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#FAFAFD',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#356899',
    marginTop: 70,
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 10,
    marginBottom: 45,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 9,
  },
  button: {
    backgroundColor: '#356899',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 25,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30, 
    gap: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc', 
  },
  text: {
    marginHorizontal: 10, 
    color: '#ccc', 
    fontSize: 12,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 60,
    alignItems: 'center',
  },
  socialButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  socialIcon: {
    height: 30,
    width: 30,
  },
  registerText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 25,
    fontSize: 12,
  },
  registerLink: {
    color: '#356899',
    fontWeight: 'bold',
  },
});

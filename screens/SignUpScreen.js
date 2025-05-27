import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'User account created!');
      navigation.navigate('AdminDashboard');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 80
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  }
});
      
//       switch (error.code) {
//         case 'auth/email-already-in-use':
//           errorMessage = 'This email is already registered';
//           break;
//         case 'auth/invalid-email':
//           errorMessage = 'Please enter a valid email address';
//           break;
//         case 'auth/weak-password':
//           errorMessage = 'Password is too weak';
//           break;
//         default:
//           errorMessage = error.message;
//       }
      
//       Alert.alert('Error', errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.formContainer}>
//         <Text style={styles.title}>Create Account</Text>
        
//         <TextInput
//           style={styles.input}
//           placeholder="Full Name"
//           value={name}
//           onChangeText={setName}
//           autoCapitalize="words"
//           editable={!loading}
//         />
        
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//           editable={!loading}
//         />
        
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           editable={!loading}
//         />

//         <TouchableOpacity 
//           style={[styles.button, loading && styles.buttonDisabled]} 
//           onPress={handleSignup}
//           disabled={loading}
//         >
//           {loading ? (
//             <ActivityIndicator color="#fff" />
//           ) : (
//             <Text style={styles.buttonText}>Sign Up</Text>
//           )}
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={styles.loginLink}
//           onPress={() => navigation.navigate('Home')}
//           disabled={loading}
//         >
//           <Text style={styles.loginText}>
//             Already have an account? <Text style={styles.loginTextBold}>Login</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   formContainer: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     textAlign: 'center',
//     color: '#333',
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     height: 50,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonDisabled: {
//     backgroundColor: '#007AFF80',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   loginLink: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   loginText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   loginTextBold: {
//     color: '#007AFF',
//     fontWeight: '600',
//   },
// });

// export default SignupScreen; 
// screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'User account created!');
      navigation.navigate('Home'); // Go back to Home screen after signup
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 80
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  }
});

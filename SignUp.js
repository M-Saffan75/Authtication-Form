import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    pwd: "",
    pwd2: ""
  })

  function handleChange(text, eventName) {
    setValues(prev => {
      return {
        ...prev,
        [eventName]: text
      }
    })
  }

  function SignUp() {
    const { email, pwd, pwd2 } = values

    if (pwd == pwd2) {
      firebase.auth().createUserWithEmailAndPassword(email, pwd)
        .then(() => {
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Password Must be Same")
    }
  }
  const [hidePass, setHidePass] = React.useState(true);
  const [hidden, setHidden] = React.useState(true);
  return (

    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <View  style={styles.viewfont}>
        <TextInput
          placeholder='Email'
          onChangeText={text => handleChange(text, "email")}
          style={styles.textInput}
          placeholderTextColor='grey'
        />
        </View>
        <View  style={styles.viewfont}>
        <TextInput
          placeholder='Password'
          onChangeText={text => handleChange(text, "pwd")}
          style={styles.textInput}
          secureTextEntry={hidePass ? true : false}
          placeholderTextColor='grey'
        />
        <View style={styles.icon}>
                <FontAwesome5 name={hidePass ? 'eye-slash' : 'eye'} onPress={() => setHidePass(!hidePass)}  style={styles.icon}/>
          </View>
        </View>
        <View  style={styles.viewfont}>
        <TextInput
          placeholder='Confirm Password'
          onChangeText={text => handleChange(text, "pwd2")}
          style={styles.textInput}
          secureTextEntry={hidden ? true : false}
          placeholderTextColor='grey'
        />
          <View style={styles.icon}>
                <FontAwesome5 name={hidden ? 'eye-slash' : 'eye'} onPress={() => setHidden(!hidden)}  style={styles.icon}/>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.Backbtn} activeOpacity={.6}  >
          <Text style={styles.btn} onPress={() => SignUp()}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor:'#f5f5f5',

  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon : {
        
    color:'#ffb36d',
    fontSize:18,
},
  viewfont: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'80%',
    borderColor: '#ffb36d',
    borderBottomWidth: 2,
    paddingHorizontal:5,
    borderRadius: 10,
    marginVertical: 20,
    
},
  textInput : {
    paddingBottom:5,
    width:'90%',
    color:'#000',
  },
  Backbtn: {
    backgroundColor: '#ffb36d',
    width: '80%',
    color: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    padding: 12,
    textAlign: 'center',
    marginVertical: 10,
  },
  btn: {
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    letterSpacing: .7,
    fontFamily: 'OpenSans-Bold',

  },
  account: {
    marginVertical: 10,
    color: '#000',
    letterSpacing: .9,
    textAlign: 'center'
  },

})
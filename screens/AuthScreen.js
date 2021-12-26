// noinspection JSValidateTypes
import React, { useState } from 'react'
import { Alert, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper';
import { GlobalStyles } from '../lib/constants'
import { supabase } from '../lib/initSupabase'

export default function AuthScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signUpLoading, setSignUpLoading] = useState(Boolean(false))
  const [signInLoading, setSignInLoading] = useState(Boolean(false))

  const handleLogin = async (type, email, password) => {
    type === 'LOGIN' ? signInLoading(true) : signUpLoading(true)
    const { error, user } =
      type === 'LOGIN'
        ? await supabase.auth.signIn({ email, password })
        : await supabase.auth.signUp({ email, password })
    if (!error && !user) Alert.alert('Check your email for the login link!')
    if (error) Alert.alert(error.message)
    type === 'LOGIN' ? setSignInLoading(false) : setSignUpLoading(false)
  }

  return (
    <View>
      <Text style={GlobalStyles.headerText}>To Do List App</Text>
      <Text style={GlobalStyles.subHeaderText}>Login or create a new account</Text>
      <View style={[GlobalStyles.verticallySpaced, { marginTop: 20 }]}>
        <TextInput
          label="Email"
          mode="outlined"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="george@fakeblock.com"
          left={<TextInput.Icon name="email" />}
        />
      </View>
      <View style={GlobalStyles.verticallySpaced}>
        <TextInput
          label="Password"
          mode="outlined"
          left={<TextInput.Icon name="lock" />}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>
      <View style={[GlobalStyles.verticallySpaced, { marginTop: 20 }]}>
        <Button
          mode="contained"
          disabled={signInLoading}
          loading={signInLoading}
          onPress={() => handleLogin('LOGIN', email, password)}
        >
          Sign in
        </Button>
      </View>
      <View style={GlobalStyles.verticallySpaced}>
        <Button
          mode="contained"
          disabled={signUpLoading}
          loading={signUpLoading}
          onPress={() => handleLogin('SIGNUP', email, password)}
        >
          Sign up
        </Button>
      </View>
    </View>
  )
}
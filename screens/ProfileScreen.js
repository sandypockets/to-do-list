import React, { useState } from "react";
import { Alert, View } from "react-native";
import { Button, Text, TextInput } from 'react-native-paper'
import { supabase } from "../lib/initSupabase";
import { GlobalStyles } from "../lib/constants";

export default function ProfileScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleProfileUpdate = async (email, password) => {
    setLoading(true)
    const { error, user } = await supabase.auth.update({ email, password })
    if (!error && !user) Alert.alert('Check your email for the login link!')
    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <View style={GlobalStyles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginBottom: 20
      }}>
        <Text style={GlobalStyles.headerText}>Profile</Text>
        <Button
          mode="contained"
          style={{ width: 115, height: 38, marginTop: 20 }}
          onPress={() => supabase.auth.signOut()}
        >
          Sign out
        </Button>
      </View>
      <View style={{ marginHorizontal: 5 }}>
        <Text style={GlobalStyles.subHeaderText}>Update your email or password</Text>
      </View>
      <View style={GlobalStyles.verticallySpaced}>
        <TextInput
          label="New email"
          mode="outlined"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="george@fakeblock.com"
          left={<TextInput.Icon name="email" />}
        />
      </View>
      <View style={GlobalStyles.verticallySpaced}>
        <TextInput
          label="New password"
          mode="outlined"
          left={<TextInput.Icon name="lock" />}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Enter your new password"
        />
      </View>
      <View style={{
        marginHorizontal: 5,
        marginTop: 10
      }}>
        <Button
          mode="contained"
          disabled={loading}
          loading={loading}
          onPress={() => handleProfileUpdate(email, password)}
        >
          Update profile
        </Button>
        <Text style={{
          marginTop: 10
        }}>You will receive an email to your existing email address to confirm email address changes. Password changes are effective immediately.</Text>
      </View>
    </View>
  );
}
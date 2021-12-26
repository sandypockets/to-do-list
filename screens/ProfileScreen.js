import React from "react";
import { View } from "react-native";
import { Button, Text } from 'react-native-paper'
import { supabase } from "../lib/initSupabase";
import { GlobalStyles } from "../lib/constants";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <View style={[GlobalStyles.verticallySpaced, { marginTop: 20 }]}>
        <Button onPress={() => supabase.auth.signOut()}>
          Sign out
        </Button>
      </View>
    </View>
  );
}
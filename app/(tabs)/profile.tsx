import { ThemedIcon } from '@/components/blazingUI/ThemedIcon'
import { ThemedSafeAreaView } from '@/components/blazingUI/ThemedSafeAreaView'
import { ThemedText } from '@/components/blazingUI/ThemedText'
import { ThemedViewH } from '@/components/blazingUI/ThemedViewH'
import { ThemedViewV } from '@/components/blazingUI/ThemedViewV'
import ThemeToggleButton from '@/components/blazingUI/ThemeToggleButton'
import { Spacing } from '@/constants/Spacing'
import { Ionicons } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import { Image } from 'expo-image'
import { router, Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

export default function Profile() {
  return (
    <ThemedSafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <ThemedViewH type="spaceBetween">
        <ThemedIcon
          icon={Ionicons as any}
          name="chevron-back"
          type="ghost"
          onPress={() => { router.back() }}
        />
        <ThemedText type="subtitle">{"  "}Profile</ThemedText>
        <ThemeToggleButton />
      </ThemedViewH>

      <ThemedViewV type='center2' style={{ marginVertical: 35 }}>
        <Image source={require("@/assets/appImages/user.png")} style={styles.image} />
        <ThemedText type='subtitle'>Albert Stevano Bajefski</ThemedText>
        <ThemedText type='gray'>Albertstevano@gmail.com</ThemedText>
      </ThemedViewV>

      <ThemedViewV style={{ gap: 5 }}>
        <TouchableOpacity onPressOut={() => router.push("/(screens)/user/editProfile")}>
          <ThemedViewH type='spaceBetween'>
            <ThemedViewH>
              <ThemedIcon icon={Ionicons as any} name="person-outline" type="ghost" size={20} />
              <ThemedText type='semiBold'>Personal Details</ThemedText>
            </ThemedViewH>
            <ThemedIcon icon={Ionicons as any} name="chevron-forward" type="ghost" size={22} />
          </ThemedViewH>
        </TouchableOpacity>

        <TouchableOpacity onPressOut={() => router.push("/(screens)/user/addressList")}>
          <ThemedViewH type='spaceBetween'>
            <ThemedViewH>
              <ThemedIcon icon={SimpleLineIcons as any} name="settings" type="ghost" size={20} />
              <ThemedText type='semiBold'>Address</ThemedText>
            </ThemedViewH>
            <ThemedIcon icon={Ionicons as any} name="chevron-forward" type="ghost" size={22} />
          </ThemedViewH>
        </TouchableOpacity>

        <TouchableOpacity onPressOut={() => {}}>
          <ThemedViewH type='spaceBetween'>
            <ThemedViewH>
              <ThemedIcon icon={Ionicons as any} name="card-outline" type="ghost" size={20} />
              <ThemedText type='semiBold'>My Orders</ThemedText>
            </ThemedViewH>
            <ThemedIcon icon={Ionicons as any} name="chevron-forward" type="ghost" size={22} />
          </ThemedViewH>
        </TouchableOpacity>

        <TouchableOpacity onPressOut={() => {}}>
          <ThemedViewH type='spaceBetween'>
            <ThemedViewH>
              <ThemedIcon icon={AntDesign as any} name="infocirlceo" type="ghost" size={20} />
              <ThemedText type='semiBold'>Help Center</ThemedText>
            </ThemedViewH>
            <ThemedIcon icon={Ionicons as any} name="chevron-forward" type="ghost" size={22} />
          </ThemedViewH>
        </TouchableOpacity>
      </ThemedViewV>

      <TouchableOpacity onPressOut={() => { }} style={styles.signoutContainer}>
        <ThemedIcon icon={Feather as any} name="log-out" type="ghost" size={20} lightColor='#e60000' darkColor='#e60000'/>
        <ThemedText type='semiBold' lightColor='#e60000' darkColor='#e60000'>Sign Out</ThemedText>
      </TouchableOpacity>


    </ThemedSafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: Spacing.padding * 2 },
  image: { width: 150, height: 150, resizeMode: "cover", borderRadius: 150 },
  signoutContainer: { flexDirection: "row", alignItems: "center", justifyContent: 'center', marginTop: 30, 
    borderWidth: 1, borderColor: "#ccc", borderRadius: 20, paddingVertical: 6 },

})
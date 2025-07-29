import { ThemedButton } from '@/components/blazingUI/ThemedButton'
import { ThemedText } from '@/components/blazingUI/ThemedText'
import { ThemedViewH } from '@/components/blazingUI/ThemedViewH'
import { ThemedViewV } from '@/components/blazingUI/ThemedViewV'
import { Spacing } from '@/constants/Spacing'
import { Image } from 'expo-image'
import { router, Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Myorder() {
    return (
        <ThemedViewV style={styles.mainContainer}>
            <Stack.Screen options={{ title: "My Orders", headerTitleAlign: 'center' }} />

            <ThemedViewV style={{ gap: 15 }}>
                <ThemedViewV style={styles.container}>
                    <ThemedViewH type='spaceBetween'>
                        <Image source={require("@/assets/appImages/homeScreen/scrollview/oil.png")} style={styles.image} />
                        <ThemedText type='subtitle'>₹ 45</ThemedText>
                    </ThemedViewH>
                    <ThemedText>Order Placed at 13 June 2025, 11:00am</ThemedText>
                    <ThemedViewH type='spaceBetween'>
                        <ThemedButton title='Processing Order' lightColor='#ccc' darkColor='#ccc' />
                        <ThemedButton title='Cancel Order' lightColor='red' darkColor='red' />
                    </ThemedViewH>
                </ThemedViewV>

                <ThemedViewV style={styles.container}>
                    <ThemedViewH type='spaceBetween'>
                        <Image source={require("@/assets/appImages/homeScreen/scrollview/oil.png")} style={styles.image} />
                        <ThemedText type='subtitle'>₹ 45</ThemedText>
                    </ThemedViewH>
                    <ThemedText type='semiBold' lightColor='green' darkColor='green'>Order Delivered</ThemedText>
                    <ThemedText>Order Placed at 13 June 2025, 11:00am</ThemedText>
                </ThemedViewV>

                <ThemedViewV style={styles.container}>
                    <ThemedViewH type='spaceBetween'>
                        <Image source={require("@/assets/appImages/homeScreen/scrollview/oil.png")} style={styles.image} />
                        <ThemedText type='subtitle'>₹ 45</ThemedText>
                    </ThemedViewH>
                    <ThemedText type='semiBold' lightColor='red' darkColor='red'>Order Delivered</ThemedText>
                    <ThemedText>Order Placed at 13 June 2025, 11:00am</ThemedText>
                </ThemedViewV>

                <ThemedViewV style={styles.container}>
                    <ThemedViewH type='spaceBetween'>
                        <Image source={require("@/assets/appImages/homeScreen/scrollview/oil.png")} style={styles.image} />
                        <ThemedText type='subtitle'>₹ 45</ThemedText>
                    </ThemedViewH>
                    <ThemedText>Order Placed at 13 June 2025, 11:00am</ThemedText>
                    <ThemedButton title='Processing Order' />
                </ThemedViewV>

                <ThemedText type='link' onPress={()=>{router.push("/(screens)/order/orderdetails")}}>Go to item details</ThemedText>
            </ThemedViewV>
        </ThemedViewV>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: Spacing.padding * 2,
    },
    container: {
        padding: Spacing.padding,
        borderWidth: 0.8,
        borderRadius:6,
        borderColor: "#ccc"
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 6,
        marginRight: 12,
        backgroundColor: "#c6ebcd"
    },
})
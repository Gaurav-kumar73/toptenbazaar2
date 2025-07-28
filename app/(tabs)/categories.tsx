import { ThemedIcon } from "@/components/blazingUI/ThemedIcon";
import { ThemedSafeAreaView } from "@/components/blazingUI/ThemedSafeAreaView";
import { ThemedText } from "@/components/blazingUI/ThemedText";
import { ThemedViewH } from "@/components/blazingUI/ThemedViewH";
import { ThemedViewV } from "@/components/blazingUI/ThemedViewV";
import { Spacing } from "@/constants/Spacing";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const category = [
  {
    title: "Vegetables & Fruits",
    image: require("@/assets/appImages/homeScreen/category/Vegetables&Fruits.png"),
  },
  {
    title: "Dairy & Breakfast",
    image: require("@/assets/appImages/homeScreen/category/Dairy&Breakfast.png"),
  },
  {
    title: "Cold Drinks & Juices",
    image: require("@/assets/appImages/homeScreen/category/ColdDrinks&Juices.png"),
  },
  {
    title: "Instant & Frozen Food",
    image: require("@/assets/appImages/homeScreen/category/Instant&FrozenFood.png"),
  },
  {
    title: "Tea & Coffee",
    image: require("@/assets/appImages/homeScreen/category/Tea&Coffee.png"),
  },
  {
    title: "Atta, Rice & Dal",
    image: require("@/assets/appImages/homeScreen/category/AttaRice&Dal.png"),
  },
  {
    title: "Masala, Oil & Dry Fruits",
    image: require("@/assets/appImages/homeScreen/category/MasalaOil&DryFruits.png"),
  },
  {
    title: "Chicken, Meat & Fish",
    image: require("@/assets/appImages/homeScreen/category/ChickenMeat&Fish.png"),
  },
  {
    title: "Vegetables & Fruits",
    image: require("@/assets/appImages/homeScreen/category/Vegetables&Fruits.png"),
  },
  {
    title: "Dairy & Breakfast",
    image: require("@/assets/appImages/homeScreen/category/Dairy&Breakfast.png"),
  },
  {
    title: "Cold Drinks & Juices",
    image: require("@/assets/appImages/homeScreen/category/ColdDrinks&Juices.png"),
  },
  {
    title: "Instant & Frozen Food",
    image: require("@/assets/appImages/homeScreen/category/Instant&FrozenFood.png"),
  },
  {
    title: "Tea & Coffee",
    image: require("@/assets/appImages/homeScreen/category/Tea&Coffee.png"),
  },
  {
    title: "Atta, Rice & Dal",
    image: require("@/assets/appImages/homeScreen/category/AttaRice&Dal.png"),
  },
  {
    title: "Masala, Oil & Dry Fruits",
    image: require("@/assets/appImages/homeScreen/category/MasalaOil&DryFruits.png"),
  },
  {
    title: "Chicken, Meat & Fish",
    image: require("@/assets/appImages/homeScreen/category/ChickenMeat&Fish.png"),
  },
];

export default function Categories() {
  return (
    <ThemedSafeAreaView style={styles.container}>
      <ThemedViewH type="spaceBetween">
        <ThemedIcon
          icon={Ionicons as any}
          name="chevron-back"
          type="ghost"
          onPress={() => {router.back()}}
        />
        <ThemedText type="subtitle">Categories</ThemedText>
        <ThemedText>{""}</ThemedText>
      </ThemedViewH>

      <ThemedViewH style={styles.categoryContainer}>
        {category.map((item, index) => (
          <ThemedViewV type="center1" key={index}>
            <Image source={item.image} style={styles.imageIcon} />
            <ThemedText numberOfLines={2} style={styles.title}>
              {item.title}
            </ThemedText>
          </ThemedViewV>
        ))}
      </ThemedViewH>

      <ThemedText type="link" onPress={()=>router.push("/(screens)/common/item")}>Go To Single Item</ThemedText>

    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.padding * 2
  },
  imageIcon: {
    width: 76,
    height: 76,
    resizeMode: "contain",
    backgroundColor: "#f2f3f2",
    borderRadius: 10,
  },
  title: {
    width: 78,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 18,
  },
  categoryContainer: { flexWrap: "wrap", justifyContent: "space-between", marginVertical: 20 }
});

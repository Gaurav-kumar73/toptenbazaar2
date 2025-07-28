import ParallaxScrollView from "@/components/blazingUI/ParallaxScrollView";
import { ThemedButton } from "@/components/blazingUI/ThemedButton";
import { ThemedText } from "@/components/blazingUI/ThemedText";
import { ThemedViewH } from "@/components/blazingUI/ThemedViewH";
import { ThemedViewV } from "@/components/blazingUI/ThemedViewV";
import { Colors } from "@/constants/Colors";
import { Spacing } from "@/constants/Spacing";
import { useAppTheme } from "@/context/ThemeContext";
import { useCartStore } from "@/context/useCartStore";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

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
];

const items = [
  {
    id: 1,
    title: "Surf Excel Easy Wash Detergent Power",
    price: 120,
    image: require("@/assets/appImages/homeScreen/scrollview/surf.png"),
  },
  {
    id: 2,
    title: "Fortune Arhar Dal (Toor Dal)",
    price: 95,
    image: require("@/assets/appImages/homeScreen/scrollview/oil.png"),
  },
  {
    id: 3,
    title: "Surf Excel Easy Wash Detergent Power",
    price: 120,
    image: require("@/assets/appImages/homeScreen/scrollview/surf.png"),
  },
  {
    id: 4,
    title: "Fortune Arhar Dal (Toor Dal)",
    price: 95,
    image: require("@/assets/appImages/homeScreen/scrollview/oil.png"),
  },
  {
    id: 5,
    title: "Surf Excel Easy Wash Detergent Power",
    price: 120,
    image: require("@/assets/appImages/homeScreen/scrollview/surf.png"),
  },
  {
    id: 6,
    title: "Fortune Arhar Dal (Toor Dal)",
    price: 95,
    image: require("@/assets/appImages/homeScreen/scrollview/oil.png"),
  },
  {
    id: 7,
    title: "Surf Excel Easy Wash Detergent Power",
    price: 120,
    image: require("@/assets/appImages/homeScreen/scrollview/surf.png"),
  },
  {
    id: 8,
    title: "Fortune Arhar Dal (Toor Dal)",
    price: 95,
    image: require("@/assets/appImages/homeScreen/scrollview/oil.png"),
  },
  {
    id: 9,
    title: "Surf Excel Easy Wash Detergent Power",
    price: 120,
    image: require("@/assets/appImages/homeScreen/scrollview/surf.png"),
  },
  {
    id: 10,
    title: "Fortune Arhar Dal (Toor Dal)",
    price: 95,
    image: require("@/assets/appImages/homeScreen/scrollview/oil.png"),
  },
];


export default function HomeScreen() {
  const { theme, toggleTheme } = useAppTheme();

  const { addToCart } = useCartStore();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: Colors.light.primary,
        dark: Colors.dark.primary,
      }}
      variant="bottomRounded"
      headerOverlay={
        <View style={styles.headerContainer1}>
          <View style={[styles.flexRow, { justifyContent: "space-between" }]}>
            <View style={[styles.flexRow]}>
              <Ionicons
                name="location-outline"
                size={24}
                color={Colors.light.secondary}
                style={styles.iconContainer}
              />
              <View>
                <Text style={styles.location1}>Home</Text>
                <Text style={styles.location2}>Karol Bagh, New Delhi</Text>
              </View>
            </View>
            <View style={[styles.flexRow]}>
              <MaterialCommunityIcons
                name="bell-ring-outline"
                onPress={() => { router.push("/(screens)/common/notifications") }}
                size={26}
                color={Colors.light.secondary}
                style={styles.iconContainer}
              />
              <SimpleLineIcons
                name="handbag"
                onPress={() => { router.push("/(screens)/common/cart") }}
                size={24}
                color={Colors.light.secondary}
                style={styles.iconContainer}
              />
            </View>
          </View>

          <View style={styles.textInputContainer}>
            <Ionicons name="search" size={24} color={Colors.light.secondary} />
            <TextInput placeholder="Search" style={styles.searchBar} />
          </View>
        </View>
      }
    >
      {/* Body Content */}
      <ThemedViewV style={styles.bodyContainer}>
        <Image
          source={require("@/assets/appImages/homeScreen/top10image.png")}
          style={styles.top10image}
        />

        {/* Group 1 */}
        <ThemedViewH type="spaceBetween">
          <ThemedViewV type="center1">
            <Image
              source={require("@/assets/appImages/homeScreen/group1/cafe.png")}
              style={styles.imageIcon}
            />
            <ThemedText>Cafe</ThemedText>
          </ThemedViewV>
          <ThemedViewV type="center1">
            <Image
              source={require("@/assets/appImages/homeScreen/group1/fashion.png")}
              style={styles.imageIcon}
            />
            <ThemedText>Fashion</ThemedText>
          </ThemedViewV>
          <ThemedViewV type="center1">
            <Image
              source={require("@/assets/appImages/homeScreen/group1/electronic.png")}
              style={styles.imageIcon}
            />
            <ThemedText>Electronics</ThemedText>
          </ThemedViewV>
          <ThemedViewV type="center1">
            <Image
              source={require("@/assets/appImages/homeScreen/group1/mobile.png")}
              style={styles.imageIcon}
            />
            <ThemedText>Mobile</ThemedText>
          </ThemedViewV>
        </ThemedViewH>

        {/* Shop by category */}
        <ThemedViewH type="spaceBetween">
          <ThemedText type="subtitle">Shop By Category</ThemedText>
          <ThemedText style={{ color: Colors.light.secondary }}>
            See All
          </ThemedText>
        </ThemedViewH>
        <View style={styles.gridWrapper}>
          {category.map((item, index) => (
            <View key={index} style={styles.gridItem}>
              <ThemedViewV type="center1">
                <Image source={item.image} style={styles.imageIcon} />
                <ThemedText numberOfLines={2} style={styles.title}>
                  {item.title}
                </ThemedText>
              </ThemedViewV>
            </View>
          ))}
        </View>

        {/* Best Deal */}
        <ThemedViewH type="spaceBetween">
          <ThemedText type="subtitle">Best Deal</ThemedText>
          <ThemedText style={{ color: Colors.light.secondary }}>
            See All
          </ThemedText>
        </ThemedViewH>
        <ScrollView
          horizontal
          keyboardShouldPersistTaps="handled"
          showsHorizontalScrollIndicator={false}
        >
          {items.map((item) => (
            <ThemedViewV key={item.id} style={{ marginRight: 16 }}>
              <Image source={item.image} style={styles.imageIcon2} />
              <ThemedText numberOfLines={2} style={styles.title2}>
                {item.title}
              </ThemedText>
              <ThemedViewH type="spaceBetween">
                <ThemedText style={styles.price}>{item.price}</ThemedText>
                <ThemedButton title="Add" size="sm" onPress={() =>
                  addToCart({
                    id: item.id,
                    name: item.title,
                    price: item.price,
                    image: item.image,
                    quantity: 0
                  })
                } />
              </ThemedViewH>
            </ThemedViewV>
          ))}
        </ScrollView>

        {/* Must-Haves */}
        <ThemedViewH type="spaceBetween">
          <ThemedText type="subtitle">Must-Haves</ThemedText>
          <ThemedText style={{ color: Colors.light.secondary }}>
            See All
          </ThemedText>
        </ThemedViewH>
        <ScrollView
          horizontal
          keyboardShouldPersistTaps="handled"
          showsHorizontalScrollIndicator={false}
        >
          {items.map((item) => (
            <ThemedViewV key={item.id} style={{ marginRight: 16 }}>
              <Image source={item.image} style={styles.imageIcon2} />
              <ThemedText numberOfLines={2} style={styles.title2}>
                {item.title}
              </ThemedText>
              <ThemedViewH type="spaceBetween">
                <ThemedText style={styles.price}>{item.price}</ThemedText>
                <ThemedButton title="Add" size="sm" onPress={() =>
                  addToCart({
                    id: item.id,
                    name: item.title,
                    price: item.price,
                    image: item.image,
                    quantity: 0
                  })
                } />
              </ThemedViewH>
            </ThemedViewV>
          ))}
        </ScrollView>
      </ThemedViewV>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  headerContainer1: {
    backgroundColor: Colors.light.primary,
    padding: 20,
    gap: 20,
    marginBottom: 20, // optional
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconContainer: {
    backgroundColor: "#fff",
    borderRadius: 100,
    padding: 8,
  },
  location1: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  location2: {
    color: "#fff",
    fontSize: 13,
  },
  textInputContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 20,
    gap: 5,
  },
  searchBar: {
    flex: 1,
    height: 50,
  },

  // Body Content
  bodyContainer: {
    top: -70,
    marginHorizontal: Spacing.margin * 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 20,
  },
  top10image: {
    width: "100%",
    height: 170,
    resizeMode: "contain",
  },
  imageIcon: {
    width: 76,
    height: 76,
    resizeMode: "contain",
    backgroundColor: "#E7E8E7",
    borderRadius: 10,
  },
  title: {
    width: 78,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 18,
  },
  gridWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  gridItem: {
    width: 78, // 4 items in a row with some spacing
    marginBottom: 10,
  },
  imageIcon2: {
    width: 144,
    height: 110,
    resizeMode: "contain",
    backgroundColor: "#f2f3f2",
    borderRadius: 10,
  },
  title2: {
    width: 114,
    fontSize: 16,
    padding: 4,
    lineHeight: 18,
  },
  price: {
    fontSize: 14,
    padding: 4,
    color: Colors.light.gray,
  },
  button: {
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
});

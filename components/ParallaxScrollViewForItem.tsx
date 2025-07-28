import type { PropsWithChildren, ReactElement } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedViewV } from "@/components/blazingUI/ThemedViewV";
import { useColorScheme } from "@/hooks/useColorScheme";

const HEADER_HEIGHT = 320;

type Variant = "default" | "bottomRounded" | "topRounded" | "fullyRounded";

type Props = PropsWithChildren<{
  headerImage?: ReactElement;
  headerOverlay?: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
  variant?: Variant;
}>;

export default function ParallaxScrollViewForItem({
  children,
  headerImage,
  headerOverlay,
  headerBackgroundColor,
  variant = "default",
}: Props) {
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = 0

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const borderRadiusStyles = {
    bottomRounded: {
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
    },
    topRounded: {
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
    },
    fullyRounded: {
      borderRadius: 24,
    },
    default: {},
  };

  return (
    <ThemedViewV style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            borderRadiusStyles[variant],
            headerAnimatedStyle,
          ]}
        >
          {headerImage}
          {headerOverlay}
        </Animated.View>

        <ThemedViewV style={styles.content}>{children}</ThemedViewV>
      </Animated.ScrollView>
    </ThemedViewV>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
    justifyContent: "center",
    // alignItems: "center",
  },
  content: {
    flex: 1,
    // padding: 32,
    // gap: 16,
    // overflow: "hidden",
  },
});


// // usage
// <ParallaxScrollView
//   headerImage={
//     <Image
//       source={require("@/assets/header.jpg")}
//       style={StyleSheet.image}
//       resizeMode="cover"
//     />
//   }
//   headerOverlay={
//     <Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>
//       Welcome!
//     </Text>
//   }
//   headerBackgroundColor={{ light: "#fff", dark: "#000" }}
//   variant="bottomRounded"
// >
//   {/* Scrollable content here */}
//   <View>
//     <Text></Text>
//   </View>
//   <View>
//     <Text></Text>
//   </View>
// </ParallaxScrollView>

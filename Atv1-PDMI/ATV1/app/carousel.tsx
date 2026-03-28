// MeuCarousel.tsx
import { MaterialIcons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// 🔥 ajustes pra mobile
const CAROUSEL_WIDTH = SCREEN_WIDTH * 0.4;
const ALTURA_CAROUSEL = SCREEN_WIDTH * 0.45;

interface SlideProps {
  id: string;
  title: string;
  description: string;
  imageUrl: any;
}

const slides: SlideProps[] = [
  {
    id: "1",
    title: "GRAHHHHH",
    description: "🐉🐉🐉🐉🐉",
    imageUrl: require("../assets/images/blackfyre.png"),
  },
  {
    id: "2",
    title: "GRAHHHHH",
    description: "🐉🐉🐉🐉🐉",
    imageUrl: require("../assets/images/blackfyre.png"),
  },
  {
    id: "3",
    title: "GRAHHHHH",
    description: "🐉🐉🐉🐉🐉",
    imageUrl: require("../assets/images/blackfyre.png"),
  },
];

export const UncontrolledExample: React.FC = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      flatListRef.current?.scrollToIndex({ index, animated: true });
      setCurrentIndex(index);
    }
  };

  const renderItem = ({ item }: { item: SlideProps }) => (
    <View style={styles.slide}>
      <Image source={item.imageUrl} style={styles.image} />
      <View style={styles.caption}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={CAROUSEL_WIDTH}
        decelerationRate="fast"
        style={styles.flatList}
        getItemLayout={(data, index) => ({
          length: CAROUSEL_WIDTH,
          offset: CAROUSEL_WIDTH * index,
          index,
        })}
        onScroll={(event) => {
          const contentOffset = event.nativeEvent.contentOffset.x;
          const index = Math.round(contentOffset / CAROUSEL_WIDTH);
          if (index !== currentIndex) {
            setCurrentIndex(index);
          }
        }}
      />

      <TouchableOpacity
        style={[styles.navButton, styles.prevButton]}
        onPress={() => scrollToSlide(currentIndex - 1)}
        disabled={currentIndex === 0}
      >
        <MaterialIcons
          name="chevron-left"
          size={28}
          color={currentIndex === 0 ? "rgba(255,255,255,0.3)" : "#EAE0C8"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navButton, styles.nextButton]}
        onPress={() => scrollToSlide(currentIndex + 1)}
        disabled={currentIndex === slides.length - 1}
      >
        <MaterialIcons
          name="chevron-right"
          size={28}
          color={
            currentIndex === slides.length - 1
              ? "rgba(255,255,255,0.3)"
              : "#EAE0C8"
          }
        />
      </TouchableOpacity>

      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              currentIndex === index && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CAROUSEL_WIDTH,
    height: ALTURA_CAROUSEL,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#2C1B12",
    marginVertical: 10,
    position: "relative",
  },
  flatList: { flex: 1 },
  slide: {
    width: CAROUSEL_WIDTH,
    height: ALTURA_CAROUSEL,
    justifyContent: "flex-end",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  caption: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 8,
  },
  title: {
    color: "#C9A34E",
    fontWeight: "bold",
    fontSize: 14,
  },
  desc: {
    color: "#EAE0C8",
    fontSize: 11,
  },

  navButton: {
    position: "absolute",
    top: ALTURA_CAROUSEL / 2 - 18,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  prevButton: { left: 5 },
  nextButton: { right: 5 },

  pagination: {
    position: "absolute",
    bottom: 5,
    flexDirection: "row",
    alignSelf: "center",
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.4)",
    marginHorizontal: 3,
  },
  paginationDotActive: {
    backgroundColor: "#C9A34E",
    width: 8,
  },
});

import { Text, View, StyleSheet, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import FitnessCards from '../components/FitnessCards';
import { Ionicons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { FitnessItems } from '../Context';

const HomeScreen = () => {
  const systemTheme = useColorScheme(); // 'light' or 'dark'
  const [theme, setTheme] = useState(systemTheme || 'light');

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };
  const [showIcon, setShowIcon] = useState(false);
  const { calories, minutes, workout, } = useContext(FitnessItems);

  const getShadowCardStyle = () => ({
    backgroundColor: isDark ? "#222" : "#ffffff",
    width: "32%",
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}
      style={{ marginTop: 20 }}>
      <View style={{ backgroundColor: "#000000d7", paddingTop: 40, paddingHorizontal: 20, height: 160, width: "100%" }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 50 }}>
          <Text style={{ color: isDark ? "#fff" : "#FFD700", fontWeight: "bold", fontSize: 18 }}>
            SIX PACK IN 30 DAYS
          </Text>

          {/* Dark Mode  */}
          <TouchableOpacity onPress={toggleTheme}>
            <Ionicons name={isDark ? "sunny" : "moon"} size={24} color={isDark ? "#fff" : "#FFD700"} />
          </TouchableOpacity>
        </View>


        {/* Cards Row  */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 30 }}>

          {/* First Card  */}
          <View style={getShadowCardStyle()}>
            <Text style={{ color: isDark ? "#ccc" : "#444", fontWeight: "bold", fontSize: 18 }}>{calories.toFixed(2)}</Text>
            <Text style={{ color: isDark ? "#ccc" : "#444" }}>KCAL</Text>
          </View>

          {/* Second Card  */}
          <View style={getShadowCardStyle()}>
            <Text style={{ color: isDark ? "#ccc" : "#444", fontWeight: "bold", fontSize: 18 }}>{workout}</Text>
            <Text style={{ color: isDark ? "#ccc" : "#444" }}>WORKOUTS</Text>
          </View>

          {/* Third Card  */}
          <View style={getShadowCardStyle()}>
            <Text style={{ color: isDark ? "#ccc" : "#444", fontWeight: "bold", fontSize: 18 }}>{minutes}</Text>
            <Text style={{ color: isDark ? "#ccc" : "#444" }}>MINUTES</Text>
          </View>
        </View>
      </View>
      {/* Fitness Cards  */}
      <FitnessCards />
      <Text style={styles.developerText}>Developed by Kishan Sardhara</Text>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  developerText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
  }
});
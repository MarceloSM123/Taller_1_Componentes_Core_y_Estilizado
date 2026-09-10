import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EncabezadoCorporativo from './src/components/CompanyHeader';
import EmployeeList from './src/components/EmployeeList';
export default function App() {
  return (
    <View style={styles.container}>
      <EncabezadoCorporativo />
      <EmployeeList />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

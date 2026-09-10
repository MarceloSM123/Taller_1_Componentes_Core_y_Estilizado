import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import EncabezadoCorporativo from './src/components/CompanyHeader';
import EmployeeList from './src/components/EmployeeList';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <StatusBar style="dark" />
        <View style={styles.header}>
          <EncabezadoCorporativo />
        </View>
        <View style={styles.list}>
          <EmployeeList />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  header: {
    flex: 3,
  },
  list: {
    flex: 7,
  },
});
import { Text, View, Image, StyleSheet } from 'react-native';
export default function EncabezadoCorporativo() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://imgs.search.brave.com/XP9JEHb7bvLTMY9rf7ujCvOn88cm7qGSfBYy900gbHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2M0ZjcyYjVjNjlk/ODQ5Nzk4Njc2NjIy/Mzk5OTVkNzkzXzQw/MC5wbmc_dD02Mzg0/MTg4NDM0MzAwMDAw/MDA' }} style={styles.logo} />
            <Text style={styles.slogan}> Innovación que conecta.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FB',
    paddingHorizontal: 24,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 5,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  slogan: {
    fontWeight: '700',
    color: '#333333',
    fontSize: 16,
    marginTop: 12,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});
import {View, Text, Image, StyleSheet,ImageSourcePropType} from 'react-native';

interface ProfileCardProps {
    nombre?: string;
    cargo?:string;
    imagen?: ImageSourcePropType;
}

export default function ProfileCard({ nombre, cargo, imagen }: ProfileCardProps) {
    return (
        <View style={styles.card}>
            <Image source={imagen} style={styles.avatar} />
            <Text style={styles.nombre}>{nombre}</Text>
            <Text style={styles.cargo}>{cargo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    maxWidth: 340,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 28,
    paddingHorizontal: 24,
    marginVertical: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    marginBottom: 16,
  },
  nombre: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  cargo: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    marginTop: 6,
    textAlign: 'center',
  },
});
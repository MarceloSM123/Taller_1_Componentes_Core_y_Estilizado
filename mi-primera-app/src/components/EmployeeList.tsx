import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function EmployeeList() {
    const empleados = [{
        id: 1,
        nombre: 'Juan Pérez',
        cargo: 'Gerente de Ventas',
        imagen: 'https://imgs.search.brave.com/WEZNgUi5cTAZ35ngH67kpREPHhQxcB3lLaZ-Eflh0a4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTkx/OTI2NTM1Ny9lcy9m/b3RvL3JldHJhdG8t/ZGUtY2VyY2EtZGVs/LWhvbWJyZS1kZS1u/ZWdvY2lvcy1jb25m/aWFkby1kZS1waWUt/ZW4tbGEtb2ZpY2lu/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9YjdmVEFXWVhL/cGZBeXpPLWdDU0pw/RjN3WVhXZGhqZHk0/ZlpTRVZqMGJmST0'
    },
    {
        id: 2,
        nombre: 'María García',
        cargo: 'Asistente Administrativa',
        imagen: 'https://imgs.search.brave.com/G2HXkKj0fVbL3NkxyVzVCWn3rua-n45DeJpH6fxefu0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/MDg5NjUxOC9lcy9m/b3RvL2hlcm1vc2Et/bXVqZXItZGUtZWRh/ZC1tZWRpYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WEt0/N1pzUm1uVXR0cFFR/UlZZMWhZR1BGYnht/eGJ1RnhVYVJESUls/YmJJVT0'
    },
    {
        id: 3,
        nombre: 'Carlos López',
        cargo: 'Desarrollador Web',
        imagen: 'https://imgs.search.brave.com/YWn90xDbVwYP3AHhgIfMJ-dTpq8b5R8qPUycpQdURAI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTYz/MTc0OTU0L2VzL2Zv/dG8vcmV0cmF0by1k/ZS1ob21icmUtNTBz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0yVC13Qlozc2du/dkxDbERZaHF2QldE/M005M2hKOEJDN2Vz/XzZLelVkMlNZPQ'
    },
    {
        id: 4,
        nombre: 'Ana Martínez',
        cargo: 'Diseñadora Gráfica',
        imagen: 'https://imgs.search.brave.com/YgRben5xFZoAmVM9gSo3gwY1RIJXRlBGxX0mgtHaN4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/ODEzOTU2OC9lcy9m/b3RvL3JldHJhdG8t/ZGUtZXN0dWRpby1k/ZS1sYS1tdWplci1k/ZS0yMC1hJUMzJUIx/b3MuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVVJMW1jdkFP/blV5ZHZRU3FTRTl3/cHhZZk1fMUk0dXdl/TUNtam8xalN2a1k9'
    }]

    return(
        <FlatList
            data={empleados}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.nombre}</Text>
                    <Text>{item.cargo}</Text>
                </View>
            )}
        />
    )
}
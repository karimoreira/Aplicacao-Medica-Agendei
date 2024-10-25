import { Alert, Text, View } from "react-native";
import { styles } from "./abaprofile.style.js";
import api from "../../constants/api.js";
import { useContext, useEffect, useState } from "react";
import Button from "../../components/button/button.jsx";
import { AuthContext } from "../../contexts/auth.js";

function AbaProfile() {

    const { setUser } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    async function LoadProfile() {
        try {
            const response = await api.get("/users/profile");

            if (response.data?.name) {
                setName(response.data.name);
                setEmail(response.data.email);
            }


        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    function Logout() {
        api.defaults.headers.common['Authorization'] = "";
        setUser({});
    }

    useEffect(() => {
        LoadProfile();
    });


    return <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.title}>Nome</Text>
            <Text style={styles.text}>{name}</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.title}>E-mail</Text>
            <Text style={styles.text}>{email}</Text>
        </View>

        <View style={styles.item}>
            <Button text="Desconectar" theme="danger"
                onPress={Logout} />
        </View>
    </View>
}

export default AbaProfile;
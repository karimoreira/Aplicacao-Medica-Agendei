import { Alert, FlatList, View } from "react-native";
import { styles } from "./abacalendar.style.js";
import Appointment from "../../components/appointment/appointment.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";

function AbaCalendar() {

    const [appointments, setAppointments] = useState([]);

    async function LoadAppointments() {
        try {
            const response = await api.get("/appointments");

            if (response.data)
                setAppointments(response.data);

        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    async function DeleteAppointment(id_appointment) {
        try {
            const response = await api.delete("/appointments/" + id_appointment);

            if (response.data?.id_appointment)
                LoadAppointments();

        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    useEffect(() => {
        LoadAppointments();
    }, []);

    return <View style={styles.container}>

        <FlatList data={appointments}
            keyExtractor={(appoint) => appoint.id_appointment}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Appointment id_appointment={item.id_appointment}
                    doctor={item.doctor}
                    service={item.service}
                    specialty={item.specialty}
                    bookingDate={item.booking_date}
                    bookingHour={item.booking_hour}
                    onPress={DeleteAppointment} />
            }} />
    </View>
}

export default AbaCalendar;
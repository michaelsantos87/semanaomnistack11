import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import styles from './styles';


export default function Datail() {

    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Óla ${incident.name} é o Michael Santos valor de ${Intl.NumberFormat('pt-BR', 
                        {Style: 'currency', currency: 'BRL'
                        }).format(incident.value)}`;


    function navigateBack(){
        navigation.goBack();
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })

    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=5519981616700&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity style={styles.detailButton}
                                        onPress={navigateBack}
                                        >
                            
                    <Feather name="arrow-left" size={28} color="#Ea2041" />

                </TouchableOpacity>
            </View>

            <View  style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>
                    {
                    Intl.NumberFormat('pt-BR', 
                    {Style: 'currency', currency: 'BRL'
                }).format(incident.value)}
                </Text>

            </View>

            <View  style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre me contato:</Text>

                <View  style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>            

            </View>

        </View>
    )
}
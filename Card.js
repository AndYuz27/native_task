import React from "react";
import { StyleSheet, Text, View , Image} from "react-native";

export default function Card(props) {
    return (
        <View style={styles.card}>


            <View style={styles.cardContent}>
            <Image source = {{uri: props.cat.img_link}} style = {{ width: '125pt', height: '125pt' }}/>
                <Text>Имя: {props.cat.name}</Text>
                <Text>Возраст: {props.cat.age}</Text>
                <Text>Описание: {props.cat.description}</Text>
                <Text>ID: {props.cat.id}</Text>
                <Text>Рейтинг: {props.cat.rate}/10</Text>
                
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
    },
});

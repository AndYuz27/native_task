import React from "react";
import {
    Button,
    View,
    Text,
    StyleSheet,
    TextInput,
    SafeAreaView,
} from "react-native";
import { delCat, addCat, updCat } from "./api";

export default function First({ navigation }) {
    const [name, onChangeName] = React.useState("");
    const [description, onChangeDesc] = React.useState("");
    const [id, onChangeId] = React.useState(""); 
    const [img_link, onChangeImg] = React.useState(""); 
    const [UpImg_link, onChangeUpImg] = React.useState(""); 
    const [age, onChangeAge] = React.useState("");
    const [rate, onChangeRate] = React.useState("");
    const [UpRate, onChangeUpRate] = React.useState("");
    const [delId, onChangeDelId] = React.useState("");
    const [updId, onChangeUpdId] = React.useState("");
    const [updAge, onChangeUpdAge] = React.useState("");
    const [updDesc, onChangeUpdDesc] = React.useState("");
    return (
        <View
            style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text
                onPress={() => navigation.navigate("Home")}
                style={{ fontSize: 20, fontWeight: "bold" }}
            >
                Страница добавления, редактирования и удаления котиков
            </Text>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeName}
                    placeholder="Введите имя кота"
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeAge}
                    value={age}
                    placeholder="Введите возраст кота"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeDesc}
                    value={description}
                    placeholder="Введите описание"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeId}
                    value={id}
                    placeholder="Введите айди"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeRate}
                    value={rate}
                    placeholder="Социальный рейтинг 社会信用体系"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeImg}
                    value={img_link}
                    placeholder="Вставьте url-ссылку картинки"
                    keyboardType="numeric"
                />
                <Button
                    title="Создать кота!!!"
                    onPress={() => addCat({ name, age, id, img_link, description, rate})}
                />
            </SafeAreaView>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUpdId}
                    value={updId}
                    placeholder="Айди кота"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUpdAge}
                    value={updAge}
                    placeholder="Введите новый возраст"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUpdDesc}
                    value={updDesc}
                    placeholder="Введите новое описание"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUpRate}
                    value={UpRate}
                    placeholder="New Социальный рейтинг 社会信用体系"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUpImg}
                    value={UpImg_link}
                    placeholder="Вставьте url-ссылку картинки"
                    keyboardType="numeric"
                />
                <Button
                    title="Изменить кота!!!"
                    onPress={() =>
                        updCat(updId, { age: updAge, description: updDesc, rate: UpRate, img_link: UpImg_link })
                    }
                />
            </SafeAreaView>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeDelId}
                    value={delId}
                    placeholder="Айди кота для удаления"
                    keyboardType="numeric"
                />
                <Button title="Удалить кота!!!" onPress={() => delCat(delId)} />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

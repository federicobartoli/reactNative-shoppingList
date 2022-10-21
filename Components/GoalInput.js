import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

const GoalInput = ({ onAddGoal, isVisible, setIsVisible }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    function inputGoalHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        if (enteredGoal.trim() !== '') {
            onAddGoal(enteredGoal);
            setEnteredGoal('');
            setIsVisible(false);
        }
    }

    return (
        <Modal visible={isVisible} animationType={"slide"}>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/images/cartshop.png")} />
                <TextInput value={enteredGoal} style={styles.textInput} placeholder="Lista della spesa" onChangeText={inputGoalHandler} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color="#f31282" title="Chiudi" onPress={() => setIsVisible(false)} />
                    </View>
                    <View style={styles.button}>
                        <Button color="#0e9c4e" title="Aggiungi" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>

        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#c4badb'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        color: "#120438",
        width: '70%',
        padding: 16,
    },
})
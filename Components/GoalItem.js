
import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = ({ text, onDeleteItem, id }) => {
    return (

        <View style={styles.goalItem}>
            <Pressable style={({ pressed }) => pressed && styles.pressedItem} android_ripple={{ color: '#089d37' }} onPress={onDeleteItem.bind(this, id)}>
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>

    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 6,
        backgroundColor: '#0acc47',
        color: '#fff',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: '#fff',
        padding: 8
    }
})
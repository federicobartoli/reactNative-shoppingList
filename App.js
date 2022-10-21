import { useState } from 'react';
import { StyleSheet, View, Button, Keyboard, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//Components
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';

export default function App() {
  const [modalIsVisibile, setModalIsVisible] = useState(false);
  const [listOfGoals, setListOfGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const addGoalHandler = (enteredGoal) => {
    setListOfGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
    Keyboard.dismiss();
  }

  const deleteGoalHandler = (id) => {
    setListOfGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  }

  const renderItem = ({ item }) => {
    return (
      <GoalItem id={item.key} onDeleteItem={deleteGoalHandler} text={item.value} />
    )
  }



  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Aggiungi un nuovo elemento" color="#ffffff" onPress={startAddGoalHandler} />
        {modalIsVisibile && <GoalInput setIsVisible={setModalIsVisible} isVisible={modalIsVisibile} onAddGoal={addGoalHandler} />}
        <View style={styles.goalsContainer}>
          <FlatList renderItem={renderItem} data={listOfGoals}>
          </FlatList>
        </View>
        <View style={styles.resetContainer}>
          <Button color="#ffffff" title="Resetta" onPress={() => setListOfGoals([])} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  resetContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

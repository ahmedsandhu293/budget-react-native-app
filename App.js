import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,FlatList} from 'react-native';
import BudgetInput from './components/BudgetInput';
import {useState} from 'react'
import BudgetCard from './components/BudgetCard';
export default function App() {
  const [visibleModal,setVisibleModal] = useState(false);
  const [budgetData,setBudgetData] = useState([])
  const openBudgetModal = ()=>{
    setVisibleModal(true)
  }
  const closeBudgetModal = ()=>{
    setVisibleModal(false)
  }
  const budgetDataHandler = (dataObj)=>{
    setBudgetData(prevState=>[dataObj,...prevState])
    console.log(budgetData)
  }
  const totalExpense = budgetData.map(el=> Number(el.amount))
   console.log(totalExpense)
   let sum = 0;
   const totalAountHandler = (arr)=>{
    const array = arr;
     for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
     console.log(sum);
     return sum
   }
   totalAountHandler(totalExpense)
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.container}>
       <View style={styles.addButton}>
          <Button title='Add Budget' color='#246EE9' onPress={openBudgetModal}/>
       </View>
       <BudgetInput 
       onDataAdd={budgetDataHandler}
       visible={visibleModal} closeModal={closeBudgetModal}/>
      <View>
        <Text style={styles.totalAmount}>Total Amount : $ {sum}</Text>
      </View>
       <View style={styles.budgetList}>
       <FlatList
        data={budgetData}
        renderItem={(itemData)=>{
          return(<BudgetCard title={itemData.item.title} amount={itemData.item.amount}/>
          )
        }}
        keyExtractor={(item,index)=>{
          return index
        }}
        alwaysBounceVertical={false}
       />
       </View>
    </View>
    </>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'white',
    width:'100%',
    height:'100%'
  },
  addButton:{
   zIndex:1,
   position:'absolute',
   bottom:10,
   right:10,
   left:10
  },
  budgetList:{
    zIndex:0,
    top:20,
    marginTop:90,
    marginBottom:100
  },
  totalAmount:{
    color:'#fff',
    marginTop:50,
    textAlign:'center',
    fontSize:20,
    zIndex:1,
    position:'absolute',
    top:10,
    right:10,
    left:10
  }
});

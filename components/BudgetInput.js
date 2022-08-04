import { useState } from 'react'
import { StyleSheet, Text, View,Modal,Button ,TextInput,Pressable} from 'react-native'
import React from 'react'

const BudgetInput = (props) => {
  const [inputTitle,setInputTitle] = useState('');
  const [inputAmount,setInputAmount] = useState('');
  const inputTitleHandler = (enteredText)=>{
    setInputTitle(enteredText)
  }
  const inputAmountHandler = (enteredText)=>{
    setInputAmount(enteredText)
  }
  const addBudgetDataInputs = ()=>{
    const dataInputs = {
      title:inputTitle,
      amount:inputAmount
    }
  
    props.onDataAdd(dataInputs)
    setInputAmount('');
    setInputTitle('')
    props.closeModal()
  }
  return (
    <Modal visible={props.visible} animationType='fade'>
      <View style={styles.budgetInput}>
        <View style={styles.cardInputs}>
        <TextInput placeholder='Add Title'
        placeholderTextColor={'white'}
        onChangeText={inputTitleHandler}
        value={inputTitle}
        style={styles.inputStyle}/>
         <TextInput placeholder='Add Amount'
            onChangeText={inputAmountHandler}
            value={inputAmount}
        placeholderTextColor={'white'}
        style={styles.inputStyle}/>        
        <View style={styles.btnContainer}>
         
        
         <Pressable style={styles.closeBtn} onPress={props.closeModal}>
            <Text style={styles.buttonCloseText}>Close</Text>
           </Pressable>
         <Pressable style={styles.addBtn}  
         disabled={inputTitle === '' ||  inputAmount === '' ? true:false}
         onPress={addBudgetDataInputs}>
            <Text style={styles.buttonAddText}>Add</Text>
         </Pressable>
         
        </View>
        </View>
      </View>
    </Modal>
    
  )
}

export default BudgetInput

const styles = StyleSheet.create({
    budgetInput:{
        backgroundColor:'#2C3333',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:16
    },
    cardInputs:{
        backgroundColor:'#246EE9',
        width:'100%',
        padding:40,
        borderRadius:15
    },
    inputStyle:{
        borderBottomColor:'#fff',
        borderBottomWidth:2,
        padding:10,
        color:'#fff',
        width:'100%',
        marginBottom:35,
        borderRadius:12,
        fontSize:16,
        fontWeight:'800'
    },
    btnContainer:{
      flexDirection:'row',
      marginTop:15,
      justifyContent:'space-around'
    },
    closeBtn:{
      backgroundColor:'#2C3333',
      color:'fff',
      borderRadius:12
    },
  addBtn:{
      backgroundColor:'#fff',
      color:'fff',
      borderRadius:12
    },
    buttonCloseText:{
      width:100,
      borderRadius:12,
      textAlign:'center',
      color:'#fff',
      padding:8,
      fontSize:16,
      fontWeight:'800'
      
    },
    buttonAddText:{
      width:100,
      borderRadius:12,
      color:'#246EE9',
      textAlign:'center',
      padding:8,
      fontSize:16,
      fontWeight:'800'
    }
})
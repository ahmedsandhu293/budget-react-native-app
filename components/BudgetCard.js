import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BudgetCard = (props) => {
  return (
    <View style={styles.budgetCard}>
        <View>
           <Text style={styles.budgetText}>{props.title}</Text>
        </View>
        <View>
           <Text style={styles.budgetTextAmount}>$ {props.amount}</Text>
        </View>
      
    </View>
  )
}

export default BudgetCard

const styles = StyleSheet.create({
    budgetCard:{
        margin:15,
        borderRadius:6,
        backgroundColor:'#246EE9',
        padding:40,
        width:'80%',
        marginLeft:35
    
    },
    budgetText:{
        color:'#fff',
        fontSize:20,
        padding:10
    },
    budgetTextAmount:{
        color:'#fff',
        fontSize:35,
        padding:10
    }
})
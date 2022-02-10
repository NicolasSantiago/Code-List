import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import AddItems from './Components/AddItems';
import Header from './Components/Header';
import { Icon }  from 'react-native-elements';

export default function App() {
  const [textInput, setTextInput] = useState('');
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const [Favorite, setFavorite] = useState(false)

  const handleChangeText = (text) => {
    setTextInput(text)
  }

  const handleOnPress = () => {
    setTextInput('')
    setItemList([
      ...itemList,
      {
        value: textInput,
        id: Math.random().toString(),
      },
    ])
  }
  
  const handleOnDelete = (item) => () => {
    setModalVisible(true)
    setItemSelected(item)
  }

  const handleConfirmDelete = () => {
    const { id } = itemSelected
    setItemList(itemList.filter(item => item.id !== id))
    setModalVisible(false)
    setItemSelected({})
  }

  const addFavorite = () => {
    console.log("Add Favorite")
    setFavorite(true)
  }

  const removeFavorite = () => {
    console.log("Remove Favorite")
    setFavorite(false)
  }

  return (
    <View style={styles.container}>
      <Header title={'Task List'}/> 
      
      <FlatList
        style={styles.listContainer}
        data={itemList}
        renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.containerButtons}>     
                <View style={styles.containerFavorites}>
                  <Icon
                    type='material-community'
                    name={ Favorite ? 'heart' : 'heart-outline'}
                    onPress={ Favorite ? removeFavorite : addFavorite }
                    color='#C4DFE6'
                    size={20}
                    underlayColor='transparent'
                  />
                </View>

                <View style={styles.containerButtonDelete}>
                  <TouchableOpacity
                    style={styles.buttonDelete}
                    onPress={handleOnDelete(item)}
                  >
                    <Text style={styles.textDelete}>x</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={{color:'#C4DFE6', paddingHorizontal: 3}}>{item.value}</Text>
            </View>
          )
        }
        keyExtractor={item => item.id}
      />

      <Modal 
        animationType='slide' visible={modalVisible} presentationStyle={'pageSheet'}
      >
        <View style={styles.containerModal}>
          <View>
            <Text style={{marginBottom: 10}}>¿Está seguro que desea eliminar el recordatorio?</Text>
            <Text>{itemSelected.value}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={handleConfirmDelete}
            >
              <Text style={styles.textConfirm}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <AddItems
        textInput={textInput}
        handleOnPress={handleOnPress}
        handleChangeText={handleChangeText}
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A6CFD5',
  },

  itemContainer: {
    padding: 10,
    marginVertical: 20,
    backgroundColor: '#0D0221',  
    justifyContent: 'space-between',
    borderRadius: 10,
  },

  listContainer: {
    paddingHorizontal: 30,
  },

  containerButtons: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  buttonDelete: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  textDelete: {
    backgroundColor: '#C4DFE6',
    color: '#66A5AD',
    paddingHorizontal: 8,
    borderRadius: 20,
    paddingBottom: 4,
  },

  containerModal: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40vh'
  },

  textConfirm: {
    backgroundColor: '#C4DFE6', 
    padding: 10, 
    paddingHorizontal: 30, 
    borderRadius: 7
  },

  completeText: {
    // backgroundColor: '#C4DFE6',
    // color: '#003B46',
    paddingHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 2,
    fontSize: 12
  },

  containerFavorites: {

    
  }
});

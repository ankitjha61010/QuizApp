import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

const Analysys = () => {
  const [question, setQuestion] = useState([]);
  const [que, setque] = useState(0);

  useEffect(() => {
    QuestinAnswer();
  }, []);
  const QuestinAnswer = () => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=2cd39531630efe30059a89da5c9cc9c0');

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://opentdb.com/api.php?amount=50&type=multiple&encode=url3986',
      requestOptions,
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson?.results);
        setQuestion(responseJson?.results);
        // setoption(responseJson?.results[0])
        // console.log(option,"options")
      })
      .catch(error => console.log('error', error));
  };
  return (
    <View style={{flex: 1}}>
       <TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
        <Image source={require('../../assets/backarrow.png')} style={{padding:25,marginBottom:10}}/>
      </TouchableOpacity>
      <View>
        <Text>Analysys</Text>
      </View>
      <View>
        <FlatList
          data={question}
          style={{height: 650}}
          keyExtractor={item => item.id}
          renderItem={() => {
            return (
              <View>
                {console.log(decodeURIComponent(question[0].question))}
                {console.log(decodeURIComponent(question[0].correct_answer))}
                <View
                  style={{
                    backgroundColor: '#1f7ea1',
                    marginHorizontal: 10,
                    borderRadius: 10,
                    maxWidth: '90%',
                  }}>
                  <Text>{que + 1}</Text>
                  <Text style={{color: 'black', fontSize: 15, start: 5}}>
                    Question:- {decodeURIComponent(question[que + 1].question)}
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: '#1f7ea1',
                    marginHorizontal: 10,
                    borderRadius: 10,
                    maxWidth: '90%',
                    margin: 10,
                  }}>
                  <Text style={{color: 'red', fontSize: 15, start: 5}}>
                    Answer:- {decodeURIComponent(question[0].correct_answer)}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          alignItems: 'center',
          marginHorizontal: 10,
          borderRadius: 10,
          marginTop: 10,
        }}>
        <Text style={{color: 'white', textAlign: 'center', padding: 16}}>
          Go to Result Page
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Analysys;

const styles = StyleSheet.create({});

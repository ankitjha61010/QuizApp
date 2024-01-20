import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Result = props => {


  const score = props.route.params.score;
  console.log(score);



  return (
    <View style={{flex: 1, padding: 12}}>
       <TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
        <Image source={require('../../assets/backarrow.png')} style={{padding:25,marginBottom:10}}/>
      </TouchableOpacity>
      <View style={{marginVertical: 16}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color: 'blue',
          }}>
          Result
        </Text>
      </View>
      <View style={{marginVertical: 12, flex: 1}}>
        <Image
          source={require('../../assets/result.png')}
          style={{height: '100%', width: '100%', resizeMode: 'cover'}}
          resizeMode="stretch"
        />
      </View>

      <View style={{flex: 1}}>
        {score >= 50 ? (
          <View style={{}}>
            <View>
              <Text
                style={{
                  fontSize: 40,
                  textAlign: 'center',
                  color: 'red',
                  paddingBottom:10
                }}>
                Congrats!!!..
              </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../../assets/congrats.png')}
                style={{height: 100, width: 100,}}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  color: 'green',
                  marginTop: 20,
                }}>
                 your score is {score}
              </Text>
            </View>
          </View>
        ) : (
          <View style={{flex: 1,}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../../assets/fail.png')}
                style={{height: 100, width: 100, opacity: 0.9}}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  color: 'green',
                  marginTop: 20,
                }}>
                Your are fail {score}
              </Text>
            </View>
          </View>
        )}
      </View>
      <View>
      <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Analysys');
          }}
          style={{
            backgroundColor: '#0061ff',
            
            borderRadius: 10,marginBottom:10,justifyContent: 'flex-end',width:110
          }}>
          <Text
            style={{
              textAlign: 'center',
              padding: 16,
              fontSize: 20,
              color: 'white',
            }}>
            Analysis
          </Text>
        </TouchableOpacity>



        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Home');
          }}
          style={{
            backgroundColor: '#0061ff',
            marginHorizontal: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              padding: 16,
              fontSize: 20,
              color: 'white',
            }}>
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({});

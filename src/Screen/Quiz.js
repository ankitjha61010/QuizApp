import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const Quiz = props => {
  const [question, setQuestion] = useState([]);
  const [que, setQue] = useState(0);
  const [option, setoption] = useState([]);
  const [score, setScore] = useState(0);
  const [loder, setLoader] = useState(true);
  const [key, setKey] = useState(0);

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
        console.log(responseJson?.results[0]?.question);
        setQuestion(responseJson?.results);

        // setoption(responseJson?.results[0])
        // console.log(responseJson?.results, 'options');
        setoption(generatwoptionandsuffle(responseJson?.results[0]));
        setLoader(false);
      })
      .catch(error => console.log('error', error));
  };

  const handlenextquestion = () => {
    if (que != 49) {
      setQue(que + 1);
      setoption(generatwoptionandsuffle(question[que + 1]));
      setKey(prevKey => prevKey + 1);
    } else {
      console.log('end');
    }
  };

  const shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const generatwoptionandsuffle = _question => {
    const options = [..._question.incorrect_answers];
    console.log('option');
    console.log(option);
    options.push(_question.correct_answer);
    console.log(options, 'before Suffle');
    shuffleArray(options);
    console.log(options);

    return options;
  };

  const verifyAnswer = _option => {
    console.log('Abhishek');
    if (_option === question[que].correct_answer) {
      console.log(question[que].correct_answer);
      setScore(score + 10);
      setQue(que + 1);
      setKey(prevKey => prevKey + 1);
    } else if (que != 49 || _option === question[que].incorrect_answers) {
      console.log('ankit');

      setQue(que + 1);
      setoption(generatwoptionandsuffle(question[que + 1]));
      setScore(que - 10);
      setKey(prevKey => prevKey + 1);
    }
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
        <Image source={require('../../assets/backarrow.png')} style={{padding:25,marginBottom:10}}/>
      </TouchableOpacity>
      {loder ? (
        <ActivityIndicator
          color={'#1f7ea1'}
          size={40}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        />
      ) : (
        <View>
          <View
            style={{
              height: 100,
              width: '90%',
              start: 10,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 22,
                color: 'black',
                flexWrap: 'wrap',
              }}>
              Q.{que + 1}
            </Text>
            <Text style={{width: 6}}></Text>
            <Text
              style={{
                fontWeight: '600',
                marginTop: 2,
                fontSize: 19,
                color: 'black',
                flexWrap: 'wrap',
                maxWidth: '87%',
                maxHeight: '110%',
              }}>
              {decodeURIComponent(question[que]?.question)}
            </Text>
          </View>

          <View>
            <CountdownCircleTimer
              size={95}
              key={key}
              onComplete={() => {
                handlenextquestion();
              }}
              isPlaying
              duration={10}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[7, 5, 2, 0]}>
              {({remainingTime}) => (
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      textAlign: 'center',
                      color: '#F7B801',
                    }}>
                    Remaining
                  </Text>
                  <Text style={{fontSize: 12, textAlign: 'center'}}>
                    {remainingTime}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      textAlign: 'center',
                      color: '#F7B801',
                    }}>
                    Second
                  </Text>
                </View>
              )}
            </CountdownCircleTimer>
          </View>

          {question && (
            <View style={{marginHorizontal: 20, start: 0, marginLeft: 5}}>
              <TouchableOpacity
                onPress={() => {
                  verifyAnswer(option[0]);
                }}
                style={{
                  backgroundColor: '#1f7ea1',
                  borderRadius: 10,
                  marginVertical: 8,
                }}>
                <Text
                  style={{
                    padding: 12,
                    color: 'white',
                    fontWeight: '600',
                    fontSize: option[0]?.length > 40 ? 14 : 18,
                  }}>
                  A. {decodeURIComponent(option[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  verifyAnswer(option[1]);
                }}
                style={{
                  backgroundColor: '#1f7ea1',
                  borderRadius: 10,
                  marginVertical: 8,
                }}>
                <Text
                  style={{
                    padding: 12,
                    color: 'white',
                    fontWeight: '600',
                    fontSize: option[0]?.length > 40 ? 14 : 18,
                  }}>
                  B. {decodeURIComponent(option[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  verifyAnswer(option[2]);
                }}
                style={{
                  backgroundColor: '#1f7ea1',
                  borderRadius: 10,
                  marginVertical: 8,
                }}>
                <Text
                  style={{
                    padding: 12,
                    color: 'white',
                    fontWeight: '600',
                    fontSize: option[0]?.length > 40 ? 14 : 18,
                  }}>
                  C. {decodeURIComponent(option[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  verifyAnswer(option[3]);
                }}
                style={{
                  backgroundColor: '#1f7ea1',
                  borderRadius: 10,
                  marginVertical: 8,
                }}>
                <Text
                  style={{
                    padding: 12,
                    color: 'white',
                    fontWeight: '600',
                    fontSize: option[0]?.length > 40 ? 14 : 18,
                  }}>
                  D. {decodeURIComponent(option[3])}
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 5,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#1f7ea1',
                  borderRadius: 10,
                  marginVertical: 8,
                }}>
                <Text style={{padding: 15, color: 'white'}}>SKIP</Text>
              </TouchableOpacity>
              {que !== 49 && (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#1f7ea1',
                    borderRadius: 10,
                    marginVertical: 8,
                    marginEnd: 13,
                  }}
                  onPress={() => {
                    handlenextquestion();
                  }}>
                  <Text style={{padding: 14, color: 'white', marginTop: 2}}>
                    NEXT
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {que == 49 && (
              <View style={{}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#1f7ea1',
                    marginHorizontal: 10,
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    props.navigation.navigate('Result', {
                      score: score,
                    });
                  }}>
                  <Text
                    style={{padding: 16, textAlign: 'center', color: 'white'}}>
                    Quiz Submit & Result
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({});

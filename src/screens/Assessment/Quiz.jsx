import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import quizData from '../../data/data.json';

function Quiz() {
  const [currentQuestion, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(quizData.length).fill(null),
  );

  // Timer state
  const [timer, setTimer] = useState(1200); // 20 minutes in seconds

  // Function to decrement timer every second
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    // Clean up timer interval on component unmount or when timer reaches 0
    return () => clearInterval(countdown);
  }, []);

  // Format time function
  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(
      2,
      '0',
    )}`;
  };

  const handleAnswer = (selectedAnswer, index) => {
    const answer = quizData[currentQuestion]?.answer;

    // Update the selected option for the current question
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = index;
    setSelectedOptions(updatedOptions);

    // Calculate the score only if the answer is correct
    if (answer === selectedAnswer) {
      let newScore = 0;
      updatedOptions.forEach((option, i) => {
        if (quizData[i]?.answer === quizData[i]?.option[option]) {
          newScore += 10;
        }
      });
      setScore(newScore);
    }
  };

  const resetQuiz = () => {
    setQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOptions(Array(quizData.length).fill(null));
    setTimer(1200);
  };

  return (
    <>
      {showScore ? (
        <ScrollView style={styles.resultContainer}>
          <View style={styles.resultView}>
            <Text style={styles.backView}>
              {/* <Image
                source={require('../../assests/arrow.png')}
                style={styles.arrowBack}
              />{' '} */}
              <Text style={styles.backViewText}>BACK</Text>
            </Text>
          </View>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreTitle}>Exam Result</Text>
            <View style={styles.animation}>
              <Text style={styles.scoreText}>
                {((score / (quizData.length * 10)) * 100).toFixed()}%%
              </Text>

              {/* <Image
                source={require('../../assests/50515-congratulations.png')}
                style={styles.backgroundImage}
              /> */}
            </View>

            <View style={styles.scoreGap}>
              <Text style={styles.scoreDesc}>Congratulations</Text>
              <Text style={styles.scoreDesc}>You have answered</Text>
              <Text style={styles.scoreDesc}>
                <Text style={styles.scoreColor}>
                  {score / 10}/{quizData.length}
                </Text>{' '}
                questions correctly
              </Text>
            </View>
            <TouchableOpacity style={styles.restartButton} onPress={resetQuiz}>
              <Text style={styles.restartButtonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <ScrollView style={styles.viewColor}>
          <View style={styles.container}>
            <Text style={styles.title}>
              <Text style={styles.gapText}>
                {/* <Image
                  source={require('../../assests/43.png')}
                  style={styles.arrowBackMain}
                  resizeMode="contain"
                /> */}
                Communication Assessment
              </Text>
            </Text>

            <Text style={styles.time}>{formatTime(timer)}</Text>
          </View>

          <View style={styles.quizContainer}>
            <View style={styles.questionNumber}>
              <Text style={styles.numberStyle}>
                {quizData[currentQuestion]?.number}
              </Text>
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                {quizData[currentQuestion]?.question}
              </Text>
              {quizData[currentQuestion]?.option &&
                quizData[currentQuestion]?.option.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={[
                        styles.optionContainer,
                        selectedOptions[currentQuestion] === index &&
                          styles.selectedOption,
                      ]}
                      key={index}
                      onPress={() => handleAnswer(item, index)}>
                      <Text style={styles.options}>{item}</Text>
                    </TouchableOpacity>
                  );
                })}

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.buttonOne}
                  onPress={() => {
                    if (currentQuestion > 0) {
                      setQuestion(currentQuestion - 1);
                    }
                  }}>
                  <Text style={styles.buttonText}>PREVIOUS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonTwo}
                  onPress={() => {
                    if (currentQuestion < quizData.length - 1) {
                      setQuestion(currentQuestion + 1);
                    } else {
                      setShowScore(true);
                    }
                  }}>
                  <Text style={styles.buttonTextNxt}>
                    {currentQuestion < quizData.length - 1
                      ? 'NEXT'
                      : 'SHOW SCORE'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
}

export default Quiz;

const styles = StyleSheet.create({
  viewColor: {
    backgroundColor: 'rgba(0, 41, 107, 1)',

    flex: 1,
    // justifyContent: 'flex-start',
    height: '100%',
  },
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    letterSpacing: 1,
    marginTop: 40,
    marginBottom: 40,
  },
  time: {
    color: '#fff',
    backgroundColor: 'rgba(0, 183, 7, 1)',
    padding: 7,
    width: '20%',
    borderRadius: 5,
    textAlign: 'center',
    alignSelf: 'flex-end',
    fontWeight: '500',
    fontSize: 15,
    marginBottom: 10,
  },
  quizContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: '100%',
    width: '100%',
    borderRadius: 20,
    padding: 20,
  },
  scoreContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: '100%',
    width: '100%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 50,
    marginTop: 80,
    color: 'rgba(132, 31, 253, 1)',
  },

  question: {
    color: '#000',
    fontWeight: '400',
    fontSize: 17,
    marginTop: 20,
    marginBottom: 10,
    letterSpacing: 3,
    textAlign: 'center',
  },
  optionContainer: {
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 20,
    padding: 7,
  },
  selectedOption: {
    borderColor: 'rgba(0, 80, 209, 1)',
  },
  options: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonOne: {
    padding: 15,
    backgroundColor: 'rgba(245, 247, 251, 1)',
    width: '48%',
    borderRadius: 5,
  },
  buttonTwo: {
    padding: 15,
    backgroundColor: 'rgba(0, 80, 209, 1)',
    width: '48%',
    borderRadius: 5,
  },
  buttonText: {
    color: 'rgba(0, 80, 209, 1)',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
  },
  buttonTextNxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
  },
  restartButton: {
    padding: 15,
    backgroundColor: 'rgba(0, 80, 209, 1)',
    width: '50%',
    borderRadius: 5,
    marginTop: 50,
  },
  restartButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
  },

  questionNumber: {
    margin: 20,
    alignSelf: 'center',
    width: '15%',
    height: '7%',
    padding: 15,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 80, 209, 1)',
  },

  numberStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  resultContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 41, 107, 1)',
    // justifyContent: 'flex-start',
  },
  resultView: {
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },

  backView: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'left',
  },
  scoreTitle: {
    fontSize: 18,
    color: '#000',
    marginTop: -100,
  },
  scoreDesc: {
    marginTop: 5,
    fontSize: 16,
  },

  scoreColor: {
    fontSize: 16,
    color: 'rgba(132, 31, 253, 1)',
    fontWeight: '500',
  },
  scoreGap: {
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },

  animation: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },

  arrowBack: {
    width: 20,
    height: 20,
  },
  arrowBackMain: {
    width: 20,
    height: 20,
    objectFit: 'contain',
    display: 'flex',
  },
});

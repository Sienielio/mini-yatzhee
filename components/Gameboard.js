import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style';
import Footer from './Footer';
import Header from './Header';
import {
  NBR_OF_DICES,
  NBR_OF_THROWS,
  MIN_SPOT,
  MAX_SPOT,
  BONUS_POINTS_LIMIT,
  BONUS_POINTS
} from '../constants/Game';
import { Container, Row, Col } from 'react-native-flex-grid';
import style from '../style/style';


let board = [];
/* const NBR_OF_DICES = 5;
const NBR_OF_THROWS = 5; */

export default Gameboard = ({ navigation, route }) => {

  const [playerName, setPlayerName] = useState('');
  const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
  const [status, setStatus] = useState('Throw dices');
  const [gameEndStatus, setgameEndStatus] = useState(false);

  // are dices selected or not?
  const [selectedDices, setSelectedDices] =
    useState(new Array(NBR_OF_DICES).fill(false));

  // dice spots (1,2,3,4,5,6) for each dice
  const [diceSpots, setDiceSpots] =
    useState(new Array(NBR_OF_DICES).fill(0));

  // Are dice points selected or not?
  const [selectedDicePoints, setSelectedDicePoints] =
    useState(new Array(MAX_SPOT).fill(false));

  // dice points for each dice
  const [dicepointsTotal, setDicepointsTotal] =
    useState(new Array(MAX_SPOT).fill(0));

  // this one is for passing the player name to the screen
  useEffect(() => {
    if (playerName === '' && route.params?.player) {
      setPlayerName(route.params.player);
    }
  }, []);

  // this useEffect is for checking the game end status


  const dicesRow = [];
  for (let dice = 0; dice < NBR_OF_DICES; dice++) {
    dicesRow.push(
      <Col key={"dice" + dice}>
        <Pressable
          key={"dice" + dice}
          onPress={() => selectDice(dice)}>
          <MaterialCommunityIcons
            name={board[dice]}
            key={"dice" + dice}
            size={50}
            color={getDiceColor(dice)}
          >
          </MaterialCommunityIcons>
        </Pressable>
      </Col>
    );
  }

  // Call the function for calculating the points inside Text component
  // For replacing the zero
  const pointsRow = [];
for (let spot = 0; spot < MAX_SPOT; spot++) {
  pointsRow.push(
    <Col key={'pointsRow' + spot}>
      <Text key={'pointsRow' + spot}>
        {getSpotTotal(spot)}
      </Text>
    </Col>
  );
}

  const pointsToSelectRow = [];
  for (let diceButton = 0; diceButton < MAX_SPOT; diceButton++) {
    pointsToSelectRow.push(
      <Col key={'buttonsRow' + diceButton}>
        <Pressable
          key={'buttonsRow' + diceButton}
          onPress={() => selectDicePoints(diceButton)}
        >
          <MaterialCommunityIcons
            name={'numeric-' + (diceButton + 1) + '-circle'}
            key={'buttonsRow' + diceButton}
            size={35}
            color={getDicePointsColor(diceButton)}
          >
          </MaterialCommunityIcons>
        </Pressable>
      </Col>
    )
  }

  function getDiceColor(i) {
    return selectedDices[i] ? "#854a62" : "#ff8cba";
  }

  function getDicePointsColor(i) {
    if (selectedDicePoints[i] && !gameEndStatus) {
      return "#854a62";
    } else {
      return "#ff8cba";
    }
  }


  function getSpotTotal(i) {
    return dicepointsTotal[i];
  }

  const selectDice = (i) => {
    if (nbrOfThrowsLeft < NBR_OF_THROWS && !gameEndStatus) {
      let dices = [...selectedDices];
      dices[i] = selectedDices[i] ? false : true;
      setSelectedDices(dices);
    }
  }

  const throwDices = () => {
if (nbrOfThrowsLeft === 0 && !gameEndStatus) {
  setStatus('Select your point before next throw!');
  return 1;
}

   else if (nbrOfThrowsLeft === 0 && gameEndStatus) {
      setgameEndStatus(false);
      diceSpots.fill(0);
      dicepointsTotal.fill(0);
    }
  
    let spots = [...diceSpots];
    for (let i = 0; i < NBR_OF_DICES; i++) {
      if (!selectedDices[i]) {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        spots[i] = randomNumber;
        board[i] = 'dice-' + randomNumber;
      }
    }
    setNbrOfThrowsLeft(nbrOfThrowsLeft - 1);
    setDiceSpots(spots);
    setStatus('Select and throw dices again');
  }

  const selectDicePoints = (i) => {
    // very first version of the function
    let selected = [...selectedDices];
    let selectedPoints = [...selectedDicePoints];
    let points = [...dicepointsTotal];
    selectedDicePoints[i] = true;
    // Calculate the points for the selected dice spot using reduce
    let nbrOfDices = diceSpots.reduce((total, x) => (x === (i + 1) ? total + 1 : total), 0);
    points[i] = nbrOfDices * (i + 1);
    setDicepointsTotal(points);
    setSelectedDices(selected);
    setSelectedDicePoints(selectedPoints);
    return points[i];
  }

  return (
    <>
      <Header />
      <View style={styles.center}>
        <Text>Gameboard will be here... Soon</Text>
        <Container fluid>
          <Row>{dicesRow}</Row>
        </Container>
        <Text>Throws left: {nbrOfThrowsLeft}</Text>
        <Text>{status}</Text><Pressable
        style={styles.buttonThrow}
          onPress={() => throwDices()}>
          <Text style={styles.bold}>THROW DICES</Text>
        </Pressable>
        <Container fluid>
          <Row>{pointsRow}</Row>
        </Container>
        <Container fluid>
          <Row>{pointsToSelectRow}</Row>
        </Container> 
        <Text style={styles.playerName}>Player: {playerName}</Text>
      </View>
      <Footer />
    </>
  )
}

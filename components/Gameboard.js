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


  useEffect(() => {
    if (playerName === '' && route.params?.player) {
      setPlayerName(route.params.player);
    }
  }, []);

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
    )
  }

  function getDiceColor(i) {
    return selectedDices[i] ? "black" : "steelblue";
  }
  
  const selectDice = (i) => {
    if (nbrOfThrowsLeft < NBR_OF_THROWS && !gameEndStatus) {
      let dices = [...selectedDices];
      dices[i] = selectedDices[i] ? false : true;
      setSelectedDices(dices);
    }
  }

  const throwDices = () => {
    console.log('test');
    for (let i = 0; i < NBR_OF_DICES; i++) {
      if (!selectedDices[i]) {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        board[i] = 'dice-' + randomNumber;
      }
    }
    setNbrOfThrowsLeft(nbrOfThrowsLeft-1);
  }

  return (
    <>
      <Header />
      <View>
        <Text>Gameboard will be here...</Text>
        <Container fluid>
          <Row>{dicesRow}</Row>
        </Container>
        <Pressable
          onPress={() => throwDices()}>
            <Text>THROW DICES</Text>
        </Pressable>
        <Text>Player: {playerName}</Text>
      </View>
      <Footer />
    </>
  )
}







/* export default function Gameboard() {

  const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
  const [status, setStatus] = useState('');
  const [selectedDices, setSelectedDices] = 
    useState(new Array(NBR_OF_DICES).fill(false));

  const Dice = ({index}) => {
    return(
      <Pressable 
        key={"row" + index}
        onPress={() => selectDice(index)}>
        <MaterialCommunityIcons
          name={board[index]}
          key={"row" + index}
          size={50} 
          color={getDiceColor(index)}>
        </MaterialCommunityIcons>
      </Pressable>
    )
  }

  const row = [];
  for (let i = 0; i < NBR_OF_DICES; i++) {
    row.push(<Dice key={i} index={i} />);
  }

  useEffect(() => {
    checkWinner();
    if (nbrOfThrowsLeft === NBR_OF_THROWS) {
      setStatus('Game has not started');
    }
    if (nbrOfThrowsLeft < 0) {
      setNbrOfThrowsLeft(NBR_OF_THROWS-1);
    }
  }, [nbrOfThrowsLeft]);

  function getDiceColor(i) {
    if (board.every((val, i, arr) => val === arr[0])) {
      return "orange";
    }
    else {
      return selectedDices[i] ? "black" : "steelblue";
    }
  }

  const selectDice = (i) => {
    let dices = [...selectedDices];
    dices[i] = selectedDices[i] ? false : true;
    setSelectedDices(dices);
  }

  const checkWinner = () => {
    if (board.every((val, i, arr) => val === arr[0]) && nbrOfThrowsLeft > 0) {
      setStatus('You won');
    }
    else if (board.every((val, i, arr) => val === arr[0]) && nbrOfThrowsLeft === 0) {
      setStatus('You won, game over');
      setSelectedDices(new Array(NBR_OF_DICES).fill(false));
    }
    else if (nbrOfThrowsLeft === 0) {
      setStatus('Game over');
      setSelectedDices(new Array(NBR_OF_DICES).fill(false));
    }
    else {
      setStatus('Keep on throwing');
    }
  }

  const throwDices = () => {
    for (let i = 0; i < NBR_OF_DICES; i++) {
      if (!selectedDices[i]) {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        board[i] = 'dice-' + randomNumber;
      }
    }
    setNbrOfThrowsLeft(nbrOfThrowsLeft-1);
  }
  
  return(
    <View style={styles.gameboard}>
      <View style={styles.flex}>{row}</View>
      <Text style={styles.gameinfo}>Throws left: {nbrOfThrowsLeft}</Text>
      <Text style={styles.gameinfo}>{status}</Text>
      <Pressable style={styles.button}
        onPress={() => throwDices()}>
          <Text style={styles.buttonText}>
            Throw dices
          </Text>
      </Pressable>
    </View>
  )
} */
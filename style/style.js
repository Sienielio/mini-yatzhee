import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: '#d5ffb3',
    flexDirection: 'row',

  },
  footer: {
    color: '#fae6cf',
    marginTop: 20,
    backgroundColor: '#d5ffb3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1

  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#000000',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },
  center: {
    alignItems: 'center',
  },
  buttonThrow: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#2B2B52',
    borderWidth: 2,
    fontStyle: 'bold',
  },
  bold: {
    fontWeight: 'bold',
    margin: 5
    
  },
  border: {
    borderColor: '#2B2B52',
    backgroundColor: '#73CED6',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    fontWeight: 'bold'
  },
  playerName: {
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 15,  
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#2B2B52',
    borderRadius: 15,
    backgroundColor: '#d5ffb3',
    textAlign: 'center',
    width: '50%',
  },
  }

);
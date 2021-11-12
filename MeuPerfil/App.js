import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'

class App extends Component {
  render (){

    let nome= 'Pedro'
    let img = 'https://pbs.twimg.com/profile_images/1431383552504082432/xQ73MEJ-_400x400.jpg'
    return(
      <View style={styles.area}>
        
        <Image         
        source={{uri: img}}
        style={{width: 300, height: 300, alignSelf:'center'}}
        />
        <Text style={{ fontSize:21, marginTop: 20, marginStart:15}}>
          Dados pessoais:
        </Text>
        <Text style={{ fontSize:17, marginTop: 0, marginStart:9}}>
          Pedro Humberto Macedo de Oliveira 
          19 anos 
        </Text>

        <Text style={{ fontSize:21, marginTop: 9, marginStart:15}}>
          Formação:
        </Text>
        <Text style={{ fontSize:17, marginTop: 0, marginStart:9}}>
          Análise de Desenvolvimento de Sistemas (ADS)
        </Text>

        <Text style={{ fontSize:21, marginTop: 9, marginStart:15}}>
          Experiência:
        </Text>
        <Text style={{ fontSize:21, marginTop: 9, marginStart:15}}>
          Projetos:
        </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  area: {
    marginTop:80,
    justifyContent: 'center'
  },
  textoPrincipal:{
    fontSize:28,
    color: '#FF0000'
  }
})
export default App
  
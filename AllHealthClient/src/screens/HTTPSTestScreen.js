import React, { useEffect, useState } from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'


const HTTPSTestScreen = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    console.log("This is the sample data: ", data);
    console.log("Are we loading?", isLoading);

    useEffect( () => {
        fetch('https://allhealth-362116.ue.r.appspot.com/data')
        .then( (res) => res.json() )
        .then( (json) => setData(json) )
        .catch((err) =>console.log(err))
        .finally(() => setLoading(false));

    }, []);

    const HTTPFunction = () => {
        return(<Text>{
            data.description + "" + "\n" +
            data.id + "" + "\n" +
            data.name + "" + "\n"
        }
        </Text>)
    }

    const HTTPData = () => {
        return(
            <SafeAreaView>
                <Button onPress={HTTPFunction} title="Click me!"></Button>
                <Text>{
            data.description + "" + "\n" +
            data.id + "" + "\n" +
            data.name + "" + "\n"
        }
        </Text>
            </SafeAreaView>
        )
    }

  return (
    <View style={{ flex: 1, padding: 24}}>
        {isLoading ? <Text>Loading</Text> : HTTPData()}
    </View>
  )
}

export default HTTPSTestScreen;
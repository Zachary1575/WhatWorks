import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'


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

    const HTTPData = () => {
        return(
            <Text>{
                data.description + "" + "\n" +
                data.id + "" + "\n" +
                data.name + "" + "\n"
            }
            </Text>
        )
    }

  return (
    <View style={{ flex: 1, padding: 24}}>
        {isLoading ? <Text>Loading</Text> : HTTPData()}
    </View>
  )
}

export default HTTPSTestScreen;
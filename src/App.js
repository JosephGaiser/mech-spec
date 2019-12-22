import React, {useEffect, useState} from 'react';
import './App.css';
import {API, graphqlOperation} from 'aws-amplify'
import {withAuthenticator} from 'aws-amplify-react'
import {listSwitchs} from "./graphql/queries";

function App() {
    const [switches, updateSwitches] = useState([]);

    useEffect(() => {
        getData().then(r => console.log({r}))
    }, []);

    async function getData() {
        try {
            const switchData = await API.graphql(graphqlOperation(listSwitchs));
            console.log('data from API: ', switchData);
            updateSwitches(switchData.data.listSwitchs.items)
        } catch (err) {
            console.log('error fetching data..', err)
        }
    }

    return (
        <div>
            <h1> Mechanical Switches </h1>
            {
                switches.map((s, i) => (
                    <div key={i}>
                        <h2>{s.name}</h2>
                        <p>{s.type}</p>
                        <h4>{s.description}</h4>
                    </div>
                ))
            }
        </div>
    );
}

export default withAuthenticator(App, {includeGreetings: true}
)

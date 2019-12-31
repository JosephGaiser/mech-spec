import React, { useEffect, useState } from "react";
import "./App.css";
import { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
import { listSwitchs } from "./graphql/queries";
import Switch from "./components/Switch";
import CardDeck from "reactstrap/es/CardDeck";

function App() {
  const [switches, updateSwitches] = useState([]);

  useEffect(() => {
    getData().then(r => console.log({ r }));
  }, []);

  async function getData() {
    try {
      const switchData = await API.graphql(graphqlOperation(listSwitchs));
      console.log("data from API: ", switchData);
      updateSwitches(switchData.data.listSwitchs.items);
    } catch (err) {
      console.log("error fetching data..", err);
    }
  }

  return (
    <div>
      <h1> Mechanical Switches </h1>
      <CardDeck>
          {switches.map((s, i) => (
              <div key={i}>
                <Switch mySwitch={s} />
              </div>
          ))}
      </CardDeck>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });

import React from "react";
import GraphiQL from "graphiql";
import "graphiql/graphiql.css";
import "./style.css";

function graphQLFetcher(graphQLParams) {
  return fetch(window.location.origin + "/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

const App = () => (
  <GraphiQL fetcher={graphQLFetcher} schema={null}>
    <GraphiQL.Toolbar>
      <input type="text" />
    </GraphiQL.Toolbar>
  </GraphiQL>
);

export default App;

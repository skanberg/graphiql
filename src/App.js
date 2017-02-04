import React from "react";
import GraphiQL from "graphiql";
import "graphiql/graphiql.css";

function graphQLFetcher(graphQLParams) {
  return fetch("http://10.10.10.91:4567/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

const App = () => (
  <GraphiQL fetcher={graphQLFetcher}>
    <GraphiQL.Toolbar>
      <input type="text" />
    </GraphiQL.Toolbar>
  </GraphiQL>
);

export default App;

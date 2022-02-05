import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

const restEndpoint = "https://xkcd.com/327/info.0.json";

const callRestApi = async () => {
  const response = await fetch(restEndpoint);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return JSON.stringify(jsonResponse);
};

function RenderResult() {
  const [apiResponse, setApiResponse] = useState("*** now loading ***");

  useEffect(() => {
      callRestApi().then(
          result => setApiResponse(result));
  },[]);

  return(
      <div>
          <h1>React App</h1>
          <p>{apiResponse}</p>
      </div>
  );
};

class Hello extends React.Component {
  render() {
    return (
      <Layout title="Data">
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        fontSize: '20px',
      }}>

      <RenderResult/>
    
      </div>
      </Layout>
    )
  }
}

export default Hello;
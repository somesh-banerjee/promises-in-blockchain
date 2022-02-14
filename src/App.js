import React from 'react';
import Layout from './components/Layout';
import Form from './components/Form';
import List from './components/List';
import { Message } from 'semantic-ui-react';
require('dotenv').config()

const checkWeb3 = () => {
  if(typeof window !== 'undefined' && window.web3 !== undefined){
    return (
      <div>
        <Form />
        <List />
      </div>
    );
  }else{
    return (
      <div>
        <Message error header="Oops!" content="Looks like Metamask is not installed. Please install it to use the app."/>
      </div>
    );
  }
}

const App = () => {

  return (
    <div>
      <Layout>
        {checkWeb3()}
      </Layout>
    </div>
  )
}

 export default App;

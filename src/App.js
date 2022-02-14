import React from 'react';
import Layout from './components/Layout';
import Form from './components/Form';
import List from './components/List';
import NoWeb3 from './components/noWeb3';
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
      <NoWeb3 />
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

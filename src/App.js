import React from 'react';
import Layout from './components/Layout';
import Form from './components/Form';
import List from './components/List';

const App = () => {
  return (
    <div>
      <Layout>
        <Form />
        <List />
      </Layout>
    </div>
  )
}

 export default App;

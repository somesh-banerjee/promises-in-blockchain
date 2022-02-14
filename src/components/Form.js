import React,{ Component } from 'react';
import { Button,Form,Message,Segment } from 'semantic-ui-react';
import Contract from '../SmartContract/promise';
require('dotenv').config()

class aForm extends Component {
  state = {
		name: '',
		promiseStmnt: '',
		errorMessage: '',
		loading: false
	};

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true })
    this.setState({ errorMessage: '' })

    if (typeof window.ethereum === undefined) {
      console.log('MetaMask is not installed!');
      this.setState({ errorMessage: "Looks like Metamask Wallet is not installed, please install it."});
    }
    else{

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      const chainID = '0x4' //process.env.REACT_APP_D_CHAIN_ID;

      if(window.ethereum.chainId !== chainID){
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: chainID }],
          });
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: '0x4',
                    chainName: 'Rinkeby Testnet',
                    rpcUrls: ['https://rinkeby.infura.io/v3/'],
                  },
                ],
              });
            } catch (addError) {
              this.setState({ errorMessage: "Some unknown error 1. Report the issue"});
            }
          }else{
            this.setState({ errorMessage: "Some unknown error 2. Report the issue"});
          }
          
        }
      }else{
        console.log(Contract);
        try {
          const transactionDetails = await Contract.methods
            .makePromise(
              this.state.name,
              this.state.promiseStmnt
            )
            .send({
              from: account,
            });
          console.log(transactionDetails);
        } catch (e) {
          this.setState({ errorMessage: e.message});
        }
      }
    }

    this.setState({ loading: false })
    this.setState({ name: ''})
    this.setState({ promiseStmnt: ''})
  }

  render(){
    return (
      <div>
        <Segment inverted>
        <Form size="big" inverted onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <h2>Make your Promise</h2>
          <Form.Group>
              <Form.Input
                label='Name'
                width={4}
                placeholder='Name'
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
              <Form.Input
                label='The Promise'
                width={12}
                placeholder='The Promise'
                value={this.state.promiseStmnt}
                onChange={event => this.setState({ promiseStmnt: event.target.value })}
              />
          </Form.Group>
            <Message error header="Oops!" content={this.state.errorMessage}/>
            <Button primary loading={this.state.loading}>
                Make Promise
            </Button>
        </Form>
         </Segment>
      </div>
    )
  }
}

 export default aForm;

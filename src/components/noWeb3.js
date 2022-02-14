import React from 'react';
import { Message } from 'semantic-ui-react'; 

const noWeb3 = () => {
    return(
        <div>
            <Message error header="Oops!" content="Looks like Metamask is not installed. Please install it to use the app."/>
            <Message warn header="Disclaimer" content="This is a web3 app. If you are not familiar with Ethereum, Metamask wallet and Rinkeby Testnet, its better not to continue because you have to do a lot of setup to use the app"/>
            <Message info>
                <Message.Header>In case if you still want to continue</Message.Header>
                <Message.List>
                    <Message.Item>Install <a href='https://metamask.io/download/'>Metamask Wallet</a></Message.Item>
                    <Message.Item>Add Rinkeby Network to the wallet</Message.Item>
                    <Message.Item>Get some free ether from <a href='https://faucets.chain.link/rinkeby'>faucet</a> to make promise. Or skip these step if you just want to view the promises of other</Message.Item>
                    <Message.Item>All the steps are explained in this <a href='https://medium.com/@mail.bahurudeen/setup-a-metamask-ethereum-wallet-and-use-it-to-send-and-receive-ether-4f3b99360e4f'>Medium post</a></Message.Item>
                </Message.List>
            </Message>
        </div>
    )
}

export default noWeb3;
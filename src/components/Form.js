import React,{ Component } from 'react';
import { Button,Form,Message,Segment } from 'semantic-ui-react';

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

    

    this.setState({ loading: false })
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
                width={11}
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

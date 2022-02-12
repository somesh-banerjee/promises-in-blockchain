import React from 'react';
import { Button,Form,Message } from 'semantic-ui-react';

const aForm = () => {
  return (
    <div>
      <Form size="big">
        <h2>Make your Promise</h2>
        <Form.Group>
            <Form.Input
              label='Name'
              width={4}
              placeholder='Name'
            //value={this.state.name}
            //onChange={event => this.setState({ name: event.target.value })}
            />
            <Form.Input
              label='The Promise'
              width={11}
              placeholder='The Promise'
            //value={this.state.promisest}
            //onChange={event => this.setState({ promisest: event.target.value })}
            />
        </Form.Group>
            <Message error header="Oops!" />
            <Button primary>
                Make Promise
            </Button>
        </Form>
    </div>
  )
}

 export default aForm;

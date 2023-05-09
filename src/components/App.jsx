import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import { Container } from 'components/container/container';
import Form from 'components/form/form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandler = dataFromForm => {
    console.log(dataFromForm.name);
    console.log(dataFromForm.number);

    // const { name, value } = dataFromForm;
    const contact = {
      name: dataFromForm.name,
      number: dataFromForm.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  render() {
    return (
      <Container>
        <Form onSubmitFromForm={this.formSubmitHandler} />
      </Container>
    );
  }
}

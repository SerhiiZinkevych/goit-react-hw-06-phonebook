// Core
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import * as Storage from '../../services/localStorage';
// Components
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactListContainer';
import Filter from '../Filter/FilterContainer';
import Notification from '../Notification/Notification';
// Styles
import styles from './PhoneBook.module.css';
// Transitions
import slideFromRightTransition from '../../transitions/slideFromRight.module.css';
import slideFromLeftTransition from '../../transitions/slideFromLeft.module.css';
import popTransition from '../../transitions/pop.module.css';

import 'normalize.css';

class PhoneBook extends Component {
  state = {
    message: '',
    showMessage: false,
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    filter: PropTypes.string.isRequired,
    onAddContact: PropTypes.func.isRequired,
    fetchContacts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchContacts } = this.props;
    const contacts = Storage.getContactsFromLS();

    if (contacts) {
      fetchContacts(contacts);
    }
  }

  componentDidUpdate(prevProps) {
    const { contacts } = this.props;

    if (prevProps.contacts !== contacts) {
      Storage.saveContactsToLS(contacts);
    }
  }

  handleFormSubmit = (formData) => {
    const { contacts, onAddContact } = this.props;

    const contactToAdd = {
      id: uuidv4(),
      name: formData.name,
      number: formData.number,
    };

    if (contacts.find((contact) => contact.name === contactToAdd.name)) {
      this.setState({ showMessage: true, message: 'Contact already exists!' });
      setTimeout(() => {
        this.setState({ showMessage: false });
      }, 2000);
      return;
    }

    onAddContact(contactToAdd);
  };

  render() {
    const { message, showMessage } = this.state;
    const { contacts, filter } = this.props;

    return (
      <div className="container">
        <CSSTransition
          in={showMessage}
          timeout={200}
          classNames={slideFromRightTransition}
          unmountOnExit
        >
          <Notification message={message} />
        </CSSTransition>

        <CSSTransition
          in
          appear
          timeout={500}
          classNames={slideFromLeftTransition}
        >
          <h1 className={styles.title}>Phonebook</h1>
        </CSSTransition>

        <ContactForm onFormSubmit={this.handleFormSubmit} />
        <CSSTransition
          in={contacts.length > 1 || filter.length > 0}
          timeout={200}
          classNames={popTransition}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <ContactList />
      </div>
    );
  }
}

export default PhoneBook;

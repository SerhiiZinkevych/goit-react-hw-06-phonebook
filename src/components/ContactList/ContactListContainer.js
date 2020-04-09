import { connect } from 'react-redux';
import * as phonebookActions from '../../redux/phonebook/phonebookActions';
import { filterContacts } from '../../redux/phonebook/phonebookSelectors';
import ContactList from './ContactList';
import withRenderLog from '../../hocs/withRenderLog';

const mapStateToProps = (state) => ({
  contacts: filterContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(phonebookActions.deleteContact(id)),
});

export default withRenderLog(
  connect(mapStateToProps, mapDispatchToProps)(ContactList),
);

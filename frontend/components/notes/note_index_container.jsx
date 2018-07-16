import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { withRouter } from 'react-router-dom';
import {
  openDeleteModal,
  showLoadingSpinner,
  closeShortcutsModal
} from '../../actions/ui_actions';
import { updateNote, removeNote } from '../../actions/note_actions';
import { noteIndexSelector } from '../../selectors/note_index_selectors';

const mapStateToProps = (state, ownProps) => {
  const { getArg, headerTitle, notes } = noteIndexSelector(ownProps, state);
  return {
    deleteModalIsOpen: state.ui.deleteModalIsOpen,
    noteCount: state.ui.noteCount,
    getArg,
    headerTitle,
    notes
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { getAndConcat, getRelatedAction, getAndReplace } = noteIndexSelector(ownProps);
  return {
    getAndConcat: (pageNum, id) => dispatch(getAndConcat(pageNum, id)),
    getAndReplace: (pageNum, id) => dispatch(getAndReplace(pageNum, id)),
    openDeleteModal: (entityType, entity) =>
      dispatch(openDeleteModal(entityType, entity)),
    closeShortcutsModal: () => dispatch(closeShortcutsModal()),
    updateNote: (note, remove) => dispatch(updateNote(note, remove)),
    getRelatedAction: id => dispatch(getRelatedAction(id)),
    showLoadingSpinner: () => dispatch(showLoadingSpinner)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NoteIndex)
);

import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { withRouter } from 'react-router-dom';
import {
  openDeleteModal,
  showLoadingSpinner,
  closeShortcutsModal
} from '../../actions/ui_actions';
import { updateNote } from '../../actions/note_actions';
import { noteIndexSelector } from '../../selectors/note_index_selectors';

const mapStateToProps = (state, ownProps) => {
  const { headerTitle, notes, getOptions } = noteIndexSelector(ownProps, state);
  return {
    deleteModalIsOpen: state.ui.deleteModalIsOpen,
    noteCount: state.ui.noteCount,
    shortcutsModalIsOpen: state.ui.shortcutsModalIsOpen,
    loadingSpinnerIsVisible: state.ui.loadingSpinnerIsVisible,
    headerTitle,
    notes,
    getOptions
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { getAction, getRelatedAction } = noteIndexSelector(ownProps);
  return {
    getAction: (page, actionType, getOptions) =>
      dispatch(getAction(page, actionType, getOptions)),
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

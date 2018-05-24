import React from 'react';
import NoteIndexContainer from './note_index_container';
import NoteFormContainer from './note_form_container';
import SidebarNavContainer from '../nav/sidebar_nav_container';
import SidebarIndexContainer from '../sidebar/sidebar_index_container';
import DeleteModalContainer from '../modals/delete_modal_container';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getAllTags();
  }

  handleClick(e) {
    const {
      notebooksModalIsOpen,
      closeNotebooksModal,
      closeTagsModal
    } = this.props;

    if (e.target.classList.contains('sidebar-modal')) {
      if (notebooksModalIsOpen) {
        closeNotebooksModal();
      } else {
        closeTagsModal();
      }
    }
  }

  render() {
    const { notebooksModalIsOpen, tagsModalIsOpen, deleteEntityType } = this.props;
    const notebookClasses = ['sidebar-modal', 'notebooks-modal'];
    const tagClasses = ['sidebar-modal'];
    if (notebooksModalIsOpen) {
      notebookClasses.push('open-sidebar-modal');
    } else {
      notebookClasses.push('hide-sidebar-modal');
    }
    if (tagsModalIsOpen) {
      tagClasses.push('open-sidebar-modal');
    } else {
      tagClasses.push('hide-sidebar-modal');
    }
    return (
      <div className="notes-page">
        <SidebarNavContainer />
        <NoteIndexContainer />
        <div className={notebookClasses.join(' ')} onClick={this.handleClick}>
          <SidebarIndexContainer type="notebooks" />
        </div>
        <div className={tagClasses.join(' ')} onClick={this.handleClick}>
          <SidebarIndexContainer type="tags" />
        </div>
        <NoteFormContainer />
        <DeleteModalContainer deleteEntityType={deleteEntityType}/>
      </div>
    );
  }
}

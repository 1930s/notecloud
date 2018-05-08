import { connect } from 'react-redux';
import NavButton from './nav_button';
import { logout } from '../../actions/session_actions';
import { toggleSidebarModal } from '../../actions/ui_actions';

const getButtonInfo = ownProps => {
  const classes = ['fa', 'nav-icon'];
  let tooltipText;
  let type;
  let sidebarComponent = null;
  switch (ownProps.type) {
    case 'newNote':
      ['fa-plus-circle', 'fa-2x'].forEach(selector => classes.push(selector));
      tooltipText = 'NEW NOTE';
      break;
    case 'notes':
      classes.push('fa-sticky-note');
      tooltipText = 'NOTES';
      type = 'Notes';
      break;
    case 'notebooks':
      classes.push('fa-book');
      tooltipText = 'NOTEBOOKS';
      break;
    case 'tags':
      classes.push('fa-tag');
      tooltipText = 'TAGS';
      break;
    case 'logout':
      classes.push('fa-sign-out');
      tooltipText = 'LOGOUT';
      uiAction = logout;
      break;
    default:
      break;
  }
  return { uiAction, classes, tooltipText, type };
};

const mapStateToProps = (state, ownProps) => {
  const { classes, tooltipText, type } = getButtonInfo(ownProps);
  return { classes, tooltipText, modalIsOpen: state.ui.modalIsOpen, type };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { uiAction } = getButtonInfo(ownProps);
  return { uiAction: () => dispatch(uiAction()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavButton);

import {
  OPEN_NOTEBOOKS_MODAL,
  CLOSE_NOTEBOOKS_MODAL,
  OPEN_TAGS_MODAL,
  CLOSE_TAGS_MODAL,
  SHOW_TOOLTIP,
  HIDE_TOOLTIP
} from '../actions/ui_actions';

const defaultState = {
  notebooksModalIsOpen: false,
  tagsModalIsOpen: false,
  tooltipHidden: true
};

const UIReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  switch (action.type) {
    case OPEN_NOTEBOOKS_MODAL:
      newState.tagsModalIsOpen = false;
      newState.notebooksModalIsOpen = true;
      return newState;
      case CLOSE_NOTEBOOKS_MODAL:
      newState.notebooksModalIsOpen = false;
      return newState;
    case OPEN_TAGS_MODAL:
      newState.notebooksModalIsOpen = false;
      newState.tagsModalIsOpen = true;
      return newState;
    case CLOSE_TAGS_MODAL:
      newState.tagsModalIsOpen = false;
      return newState;
    case SHOW_TOOLTIP:
      newState.tooltipHidden = false;
      return newState;
    case HIDE_TOOLTIP:
      newState.tooltipHidden = true;
      return newState;
    default:
      return oldState;
  }
};

export default UIReducer;

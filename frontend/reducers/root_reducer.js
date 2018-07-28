import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import NotesReducer from './notes_reducer';
import UIReducer from './ui_reducer';
import NotebookReducer from './notebook_reducer';
import TagReducer from './tag_reducer';
import SearchReducer from './search_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  errors: errorsReducer,
  notes: NotesReducer,
  ui: UIReducer,
  tags: TagReducer,
  notebooks: NotebookReducer,
  search: SearchReducer
});

export default rootReducer;

import { createStore } from '@reduxjs/toolkit';
import directoryReducer from './redux/directory/directory.reducer';

export const toolkitStore = createStore({
    reducer: {
        directory: directoryReducer
    }
});

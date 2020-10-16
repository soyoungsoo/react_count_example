import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/reducersCounter';

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});

import { configureStore } from '@reduxjs/toolkit'
import ApplicationChatSlice from './slices/applicatonChatSlice'

const store = configureStore({
	reducer:{
		Application_Chat: ApplicationChatSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
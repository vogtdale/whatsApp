import{configureStore} from "@reduxjs/toolkit"
import userRdeducer from '../features/userSlice'
import chatReducer from '../features/chatSlice'

export default configureStore({
    reducer: {
        user: userRdeducer,
        chat: chatReducer,
    }
})
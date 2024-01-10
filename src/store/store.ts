import { configureStore } from "@reduxjs/toolkit";
import destinoReducer from './destino/destinoSlice';
import pacoteViagemReducer from './pacote-viagem/pacoteViagemSlice';

// https://blog.logrocket.com/using-typescript-redux-toolkit/

export const store = configureStore({
    reducer: {
        destinoReducer,
        pacoteViagemReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
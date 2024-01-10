import { PayloadAction, createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import { serverUrl } from "../../config/config";
import { RootState } from "../store";

export interface RespostaDestino {
    carregando: boolean;
    dados: Destino[];
    erro: any;
}

export interface Imagem {
    id: number;
    conteudo: string;
    nome: string;
}

export interface Destino {
    id: number;
    nome: string;
    descricao: string;
    imagens: Imagem[];
}

const initialState: RespostaDestino = {
    carregando: false,
    dados: [],
    erro: null,
};

const slice = createSlice({
    name: 'destino',
    initialState,
    reducers: {  },
    extraReducers: (builder) => {
        builder.addCase(buscaDestinos.pending, (state) => {
            state.carregando = true;
        })
        .addCase(buscaDestinos.rejected, (state, action) => {
            state.carregando = false;
            state.erro = action.error.message;
        })
        .addCase(buscaDestinos.fulfilled, (state, action: PayloadAction<Destino[]>) => {
            state.carregando = false;
            state.dados = action.payload;
        });
    },
});

export const buscaDestinos = createAsyncThunk(
    'destino/buscaDestinos',
    async () => {
        return fetch(`${serverUrl}/Destino`)
            .then(res => res.json())
    }
);

export const selector = (state: RootState) => state.destinoReducer;
export default slice.reducer;
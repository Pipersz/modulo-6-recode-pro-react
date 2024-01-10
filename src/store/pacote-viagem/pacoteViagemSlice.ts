import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverUrl } from "../../config/config";
import { RootState } from "../store";
import { Destino } from "../destino/destinoSlice";

export interface PacoteViagem {
    id: number;
    nome: string;
    dataIda: string;
    dataVolta: string;
    preco: number;
    numMaxPrestacoes: number;
    destino: Destino;
}

export interface RespostaPacoteViagem {
    carregando: boolean;
    dados: PacoteViagem[];
    erro: any;
}

const initialState: RespostaPacoteViagem = {
    carregando: false,
    dados: [],
    erro: null,
};

const slice = createSlice({
    name: 'pacoteViagem',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(buscaPacotes.pending, (state) => {
            state.carregando = true;
            state.erro = null;
        })
        .addCase(buscaPacotes.rejected, (state, action) => {
            state.carregando = false;
            state.erro = action.error.message;
        })
        .addCase(buscaPacotes.fulfilled, (state, action: PayloadAction<PacoteViagem[]>) => {
            console.log(action.payload);
            state.dados = action.payload;
            state.carregando = false;
            state.erro = null;
        });
    },
});

export const buscaPacotes = createAsyncThunk(
    'pacoteViagem/buscaPacotes',
    async () => {
    
        return fetch(`${serverUrl}/PacoteViagem`)
            .then(res => res.json());

        // const pacotes: PacoteViagem[] = [
        //     {
        //         id: 1,
        //         nome: 'teste',
        //         data_ida: '2024-01-01 12:00',
        //         data_volta: '2024-01-10 12:00',
        //         preco: 3000,
        //         num_max_prestacoes: 4,
        //         destino: {
        //             id: 1,
        //             nome: 'destino',
        //             descricao: 'teste teste teste teste'
        //         }
        //     },
        // ];

        // return new Promise<PacoteViagem[]>((resolve) => {
        //     setTimeout(() => resolve(pacotes), 3000);
        // });
    }
)

export const pacoteViagemSelector = (state: RootState) => state.pacoteViagemReducer;
export default slice.reducer;

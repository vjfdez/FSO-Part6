/* eslint-disable no-case-declarations */
import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from '../services/anecdotes';

const anecdoteSlice = createSlice({
    name: 'anecdote',
    initialState: [],
    reducers: {
        vote (state, action) {
            const anecdoteToChange = state.find(a => a.id === action.payload);
            const anecdoteUpdated = {
                ...anecdoteToChange, votes: anecdoteToChange.votes + 1
            };

            const newState = state.map((a) => a.id !== action.payload ? a : anecdoteUpdated);
            newState.sort((a, b) => a.votes > b.votes ? 1 : -1);
            return newState.reverse();
        },
        createAnecdote(state, action){
            return state.concat(action.payload);
        },
        setAnecdotes(state, action){
            action.payload.sort((a, b)=> a.votes> b.votes? -1 : +1);
            return action.payload;
        }
    }
});

export const { vote, createAnecdote, setAnecdotes } = anecdoteSlice.actions;

export const initalizeAnecdotes = ()=> {
    return async (dispatch)=> {
        const anecdotes = await anecdotesService.getAll();
        dispatch(setAnecdotes(anecdotes));
    };
};

export const addAnecdote = (content)=> {
    return async (dispatch)=> {
        const response = await anecdotesService.createNew(content);
        dispatch(createAnecdote(response));
    };
};

export const addVote = (id)=> {
    return async (dispatch)=> {
        const response = await anecdotesService.voteAnecdote(id);
        dispatch(vote(id));
    };
};

export default anecdoteSlice.reducer;

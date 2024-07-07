/* eslint-disable no-case-declarations */
import { createSlice } from "@reduxjs/toolkit";

const getId = () => (100000 * Math.random()).toFixed(0);

const anecdoteSlice = createSlice({
    name: 'anecdote',
    initialState: [],
    reducers: {
        vote (state = initialState, action) {
            const anecdoteToChange = state.find(a => a.id === action.payload);


            const anecdoteUpdated = {
                ...anecdoteToChange, votes: anecdoteToChange.votes + 1
            };

            const newState = state.map((a) => a.id !== action.payload ? a : anecdoteUpdated);
            newState.sort((a, b) => a.votes > b.votes ? 1 : -1);
            return newState.reverse();
        },
        createAnecdote(state = initialState, action){
            console.log('Action NEW: ', action);
            const newAnecdote = {
                id: getId(),
                content: action.payload,
                votes: 0
            }
            return state.concat(newAnecdote);
        },
        appendAnecdote(state, action){
            state.push(action.payload);
        },
        setAnecdotes(state, action){
            return action.payload;
        }
    }
});

export const { vote, createAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;

/* eslint-disable no-case-declarations */
import { createSlice } from "@reduxjs/toolkit";

const anecdotesAtStart = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
    return {
        content: anecdote,
        id: getId(),
        votes: 0
    }
};

const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
    name: 'anecdote',
    initialState,
    reducers: {
        getAll(state, action){
            return [...initialState].sort();
        },
        vote (state = initialState, action) {
            const anecdoteToChange = state.find(a => a.id === action.payload);


            const anecdoteUpdated = {
                ...anecdoteToChange, votes: anecdoteToChange.votes + 1
            };

            const newState = state.map((a) => a.id !== action.payload ? a : anecdoteUpdated);
            newState.sort((a, b) => a.votes > b.votes ? 1 : -1);
            return newState.reverse();
        },
        createNew (state = initialState, action){
            console.log('Action NEW: ', action);
            const newAnecdote = {
                id: getId(),
                content: action.payload,
                votes: 0
            }
            return state.concat(newAnecdote);
        }
    }
});

export const { getAll, vote, createNew } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;

// export const addVote = (id) => {
//     console.log("id que llega al action creator: ", id);
//     return {
//         type: 'anecdote/vote',
//         payload: {
//             id: id
//         }
//     }
// };

// export const create = (content) => {
//     return {
//         type: 'anecdote/new',
//         payload: {
//             id: getId(),
//             content,
//             votes: 0
//         }
//     }
// };


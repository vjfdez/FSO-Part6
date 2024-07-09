/* eslint-disable no-extra-semi */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';

export default function AnecdoteForm() {
    const dispatch = useDispatch();

    const newAnecdote = async(event)=> {
        event.preventDefault()
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        // const newAnecdote = await anecdoteService.createNew(content);
        
        dispatch(addAnecdote(content));
    };

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={newAnecdote}>
                <div><input name='anecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </>
    );
};

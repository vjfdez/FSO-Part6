/* eslint-disable no-extra-semi */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import anecdoteService from '../services/anecdotes';

export default function AnecdoteForm() {
    const dispatch = useDispatch();

    const addAnecdote = async(event)=> {
        event.preventDefault()
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        const newAnecdote = await anecdoteService.createNew(content);
        
        dispatch(createAnecdote(content));
    };

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </>
    );
};

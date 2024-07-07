import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';
import { text } from '../reducers/notificationReducer';

const AnecdoteList = () => {
    const dispatch = useDispatch();
    const anecdotes = useSelector(state => {

        if (state.filter === '') {
            return state.anecdotes
        }
        return state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()));
    });

    const handleVote = (anecdote) => {
        dispatch(vote(anecdote.id))
        dispatch(text(`You voted ${anecdote.content}`))
    };

    return (
        <>
            <h2>Anecdotes</h2>
            {anecdotes.length > 0 ?
                anecdotes.map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={()=> handleVote(anecdote)}>vote</button>
                        </div>
                    </div>
                ) :
                <p>No matches.</p>
            }
        </>
    )
};

export default AnecdoteList;
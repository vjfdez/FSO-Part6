import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { showNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
    const dispatch = useDispatch();
    const anecdotes = useSelector(state => {

        if (state.filter === '') {
            return state.anecdotes
        }
        return state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()));
    });

    const handleVote = (anecdote) => {
        dispatch(addVote(anecdote.id))
        dispatch(showNotification(`You voted "${anecdote.content}"`, 5))
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
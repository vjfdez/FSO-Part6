import { useDispatch } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import { useEffect } from 'react';
import { setAnecdotes } from './reducers/anecdoteReducer';
import Notification from './components/Notification';
import { text } from './reducers/notificationReducer';
import anecdotesService from './services/anecdotes';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        anecdotesService.getAll()
            .then(anecdotes => dispatch(setAnecdotes(anecdotes)));

        // dispatch(getAll())
        dispatch(text());
    }, [dispatch]);
    return (
        <div>
            <Notification />
            <Filter />
            <AnecdoteList />
            <AnecdoteForm />
        </div>
    )
};

export default App;
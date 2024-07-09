import { useDispatch } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import { useEffect } from 'react';
import { initalizeAnecdotes } from './reducers/anecdoteReducer';
import Notification from './components/Notification';
import { store } from './utils/store';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initalizeAnecdotes());
    }, []);

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
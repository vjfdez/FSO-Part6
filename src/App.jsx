import { useDispatch } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import { useEffect } from 'react';
import { getAll } from './reducers/anecdoteReducer';
import Notification from './components/Notification';
import { text } from './reducers/notificationReducer';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll())
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
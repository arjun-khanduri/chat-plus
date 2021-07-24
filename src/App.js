import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import Login from './components/Login';

const App = () => {
    if (!localStorage.getItem('username')) {
        return <Login />
    }
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    return (
        <ChatEngine
            height="100vh"
            projectID="
            580b4cb8-4e2e-4b54-a583-a15a3baaff19"
            userName={username}
            userSecret={password}
            renderChatFeed={(chatAddProps) => <ChatFeed {...chatAddProps} />}
        />
    );
}

export default App;
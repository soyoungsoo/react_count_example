import React from 'react';

import Header from './header/Header';
import TODOList from '../container/todolist/TODOList';
import Footer from './footer/Footer';
import './App.css';

function App() {
    return <div>
                <Header/>
                <TODOList/>
                <Footer/>
            </div>;
}

export default App;

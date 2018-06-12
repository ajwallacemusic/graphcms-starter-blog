import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Post from './components/Posts'

const App = () => (
    <Router>
        <div>
            <Header />
            <main>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/post/:slug' component={Post} />
            </main>
        </div>
    </Router>
)

export default App
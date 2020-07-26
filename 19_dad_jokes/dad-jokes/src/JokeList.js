import React, { Component } from 'react'
import axios from 'axios'
import uuid from 'uuid/v4'

import "./JokeList.css";
import Joke from './Joke';

class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    };
    constructor(props) {
        super(props);
        this.state = { jokes: [] };
    }
    async componentDidMount() {
        // Load jokes
        let jokes = [];
        while (jokes.length < this.props.numJokesToGet) {
            let res = await axios.get("https://icanhazdadjoke.com/", {
                headers: { Accept: 'application/json' }
            })
            jokes.push({ id: uuid(), text: res.data.joke, votes: 0 })
        } // while loop not for loop
        this.setState({ jokes: jokes })
        console.log(jokes)
    }
    handleVote (id, delta) {
        this.setState(st => ({
            jokes: st.jokes.map(j => j.id === id ? {...j, votes: j.votes + delta} : j)    
        }))
    }
    render() {
        return (
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title">
                        <span>Dad</span> Jokes
                    </h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
                    <button className='JokeList-getmore'>
                        Fetch Jokes
                    </button>
                </div>
                <div className="JokeList-jokes">
                    {this.state.jokes.map(j => (
                        <Joke 
                            key={j.id} 
                            text={j.text} 
                            votes={j.votes} 
                            upvote={() => this.handleVote(j.id, 1)}
                            downvote={() => this.handleVote(j.id, -1)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default JokeList
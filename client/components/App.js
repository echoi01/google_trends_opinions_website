import React, { Component } from 'react';
import Topics from './topics';
import { render } from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {topics: []}
    }

    componentWillMount() {
        fetch('/get_topics')
        .then((response) => response.json())
        .then((data) => {
            let topics = data.ScrapedContent;
            this.setState({topics});
        })
        .catch(err => {
            console.log("Error when attempting to get_topics", err);
        })
    }

    render() {
        let topics = this.state.topics
        const style = {
            layout: {
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                alignItems: 'center',
                justifyContent: 'space-inbetween'
            }
        }
        return (
            <div>
                <div style={style.layout}>
                    {topics.map((topic, i) => {
                        return <Topics
                                topics={topics[i]}
                                key={i}
                                i={i}
                                />
                    })}
                </div>
            </div>
        )
    }
}
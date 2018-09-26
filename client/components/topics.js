import React, { Component } from 'react';

class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: this.props.topic,
            opinion: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit() {
        fetch('/post_opinion', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
        .catch(err => {
            console.log("Error when attempting to post_opinion", err);
        })
    }

    render () {
        const style = {
            entry: {
                width: '345px',
                height: '100px',
                backgroundColor: 'lightblue',
                display: 'flex',
                alignItems: 'center',
            },
            opinions: {
                width: '800px',
                height: '120px',
                backgroundColor: 'lightblue',
                alignItems: 'center',
                overflow: 'scroll',
            },
            div: {
                display: 'block',
                clear: 'both'
            },
            list: {
                listStyleType: 'none',
            }
        }

        return (
            <div>
                <div style={{float: 'left'}}>
                    <div style={style.entry} className="entry" id={this.props.i}><h1>{this.props.topic}</h1></div>
                    <form>
                        <input name="opinion" placeholder="opinion" value={this.state.opinion} onChange={this.handleChange}/>
                        <input value="Submit" onClick={this.handleSubmit}/>
                    </form>
                </div>
            </div>
        )
    }
}
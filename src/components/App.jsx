import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
                        questions: [
                            {
                                id: 1,
                                text: 'What is your name?',
                                choices: [
                                            {
                                                id: 'a',
                                                text: 'Michael'
                                            },
                                            {
                                                id: 'b',
                                                text: 'Keegan'
                                            },
                                            {
                                                id: 'c',
                                                text: 'Thomas'
                                            }
                                        ],
                                correct: 'a'
                            },
                            {
                                id: 2,
                                text: 'What is your mothers name?',
                                choices: [
                                            {
                                                id: 'a',
                                                text: 'Mary'
                                            },
                                            {
                                                id: 'b',
                                                text: 'Margaret'
                                            },
                                            {
                                                id: 'c',
                                                text: 'Edith'
                                            }
                                        ],
                                correct: 'b'
                            },
                            {
                                id: 3,
                                text: 'What is your fathers name?',
                                choices: [
                                            {
                                                id: 'a',
                                                text: 'James'
                                            },
                                            {
                                                id: 'b',
                                                text: 'Joseph'
                                            },
                                            {
                                                id: 'c',
                                                text: 'Jose'
                                            }
                                        ],
                                correct: 'c'
                            },
                            {
                                id: 4,
                                text: 'What is your friends name?',
                                choices: [
                                            {
                                                id: 'a',
                                                text: 'Johnny'
                                            },
                                            {
                                                id: 'b',
                                                text: 'Jeremy'
                                            },
                                            {
                                                id: 'c',
                                                text: 'David'
                                            }
                                        ],
                                correct: 'a'
                            }
                        ],
                        score: 0,
                        current: 1
        }
    }

    render(){
        return (
                <div>
                    <QuestionList {...this.state}/>
                </div>
        );
    }
}

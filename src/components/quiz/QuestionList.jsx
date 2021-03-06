import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';

export default class QuestionList extends Component{
    render(){
        return (
                <div className="questions">
                    {
                        this.props.questions.map(question, function(question){
                            return <Question question={question} key={question.id} {...this.props} />
                        })
                    }
                </div>
        );
    }
}

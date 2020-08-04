import React, {Component} from 'react';
import styled from "styled-components";
import GameServices from '../services/gameServices';
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

const RandomCharBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 5px;
    h4{
    margin-bottom: 20px;
    text-align: center;
    color: red;
    }
    span.term{
    font-weight: bold;
    }
    
`

export default class RandomChar extends Component {
    constructor() {
        super();
        this.updateChar()
    }

    gameServices = new GameServices()

    state = {
        char: {},
        loading: true,
        error: false
    };

    onCharLoaded = (char) => {
        this.setState({char, loading: false})
    };
    onError = (err) => {
        this.setState({error: true, loading: false})
    };

    updateChar = () => {
        const id = Math.floor(Math.random() * 140 + 25);
        this.gameServices.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)

    };

    render() {
        const {char, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null
        const content = !(loading || error) ? <View char={char}/> : null;
        const spinner = loading ? <Spinner/> : null;


        return (
            <RandomCharBlock>
                {errorMessage}
                {spinner}
                {content}
            </RandomCharBlock>
        );
    };
}
const View = ({char}) => {
    const {name, gender, born, died, culture} = char
    return (
        <>
            <RandomCharBlock>
                <h4>Random Character:{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">{gender} </span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">{born} </span>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">{died} </span>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">{culture} </span>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </RandomCharBlock>
        </>
    )
};
import React, {Component} from 'react';
import './App.css';
/*
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from "./ScrollBox";
import IterationSample from './IterationSample';
*/
import LifeCycleSample from './LifeCycleSample';

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    state = {
        color: '#000000'
    }

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    }

    render() {
        /*
      const text = 'Are you awesome?';
      const condition = true;
      const style = {
          backgroundColor: 'gray',
          border: '1px solid black',
          height: Math.round(Math.random() * 300) + 50,
          width: Math.round(Math.random() * 300) + 50,
          WebkitTransition: 'all',
          MozTransition: 'all',
          msTransition: 'all'
    };
    */
        return (
            /*
            <div className="my-div">
                <h1>Hi react!</h1>
                <h2>{text}</h2>
                { condition && 'Show Me' }
                <div style={style}></div>
                <MyComponent name="React" age={4}/>
                <EventPractice/>
                <ValidationSample/>
                <ScrollBox ref={(ref) => this.scrollBox=ref}/>
                <button onClick={() => this.scrollBox.scrollToBottom()}>Go to Bottom</button>
              </div>
             <IterationSample/>
             */
            <div>
                <button onClick={this.handleClick}>Random Color</button>
                <LifeCycleSample color={this.state.color}/>
            </div>
        );
    }
}

export default App;
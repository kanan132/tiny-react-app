import React from 'react';

class Input extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            data : ""
        }
    }

    changeData = (data) => {
        console.log(data);
        this.setState({data: data});
    }

    render() {
        return (
            <div>
                <input className="todo-input" type="text"
                value={this.state.data} placeholder="enter todo job"
                onChange = {(e) => this.changeData(e.target.value)}></input>
                <button onClick={()=>{this.props.append(this.state.data)}}>Submit</button>
                
            </div>
        );
    }
}

export default Input;

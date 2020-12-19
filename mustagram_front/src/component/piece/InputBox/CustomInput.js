import React, {Component} from "react";

class CustomInput extends Component{

    constructor(props) {
        super(props);
        this.state = {
            type : props.type,
            id : props.id,
            name : props.name,
            isRequred : props.isRequred,
            value : props.value,
            placeholder : props.placeholder,
        }
    }

    toParentValue = this.props.fromParentValue;

    inputValue = (event) => {
       this.setState({
           value: event.target.value
       });
        this.toParentValue(this.state.value);
   }

    render() {
        return(
            <div>
                <input type={this.state.type}
                       id={this.state.id}
                       name={this.state.name}
                       value={this.state.value}
                       placeholder={this.state.placeholder}
                       onChange={this.inputValue}
                />
                <div class={'division-child'}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default CustomInput
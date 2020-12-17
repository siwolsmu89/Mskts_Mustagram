import React, {Component} from "react";
import CustomInput from "./CustomInput";

class InputId extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id : props.id,
            name : props.name,
            isRequred : props.isRequred,
            value : props.value,
            placeholder : props.placeholder,
        }
    }

    setValue = (fromChildValue) => {
        console.log(' fromParentValue : ', fromChildValue);
        this.setState({
            value : fromChildValue
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        return(
            <div class="input_box">
                <CustomInput
                    type={this.state.type}
                    id={this.state.id}
                    name={this.state.name}
                    isRequred={this.state.isRequred}
                    placeholder={this.state.placeholder}
                    fromParentValue={this.setValue}
                >
                </CustomInput>
            </div>
        )
    }
}

export default InputId
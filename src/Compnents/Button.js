import React, {Component} from "react";
import './Button.css'

class Button extends Component {
    render() {
        return(
           <a className="btn" href={this.props.url}>{this.props.name}</a>
        )
    }
}

export default Button
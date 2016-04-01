import React, { Component } from 'react';

export default class UserData extends Component {
    itemClick() {
        if (!this.props.itemClick)
            return;
        else
            this.props.itemClick(this.props.data.id);
  }

    render() {
        return (
            <tr onClick={this.itemClick.bind(this)}>
                <td>
                    <img src={`images/${this.props.data.image}.svg`} className="image_preview"/>
                </td>
                <td>
                    {this.props.data.name}
                </td>
                <td>
                    {this.props.data.age}
                </td>
                <td>
                    {`8 ${this.props.data.phone}`}
                </td>
            </tr>
        );
    }
}

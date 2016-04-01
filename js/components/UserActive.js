import React, { Component } from 'react';

export default class UserActive extends Component {
    render() {
        if (!this.props.data)
            return (
                <div className="col-sm-4 col-md-3 col-lg-2">
                    <h3>Nothing found :(</h3>
                </div>
            );

    return (
        <div className="col-sm-4 col-md-3 col-lg-2">
            <div className="user-card thumbnail">
                <img src={`images/${this.props.data.image}.svg`} />
                <div className="user-card_description">
                    <h3>{this.props.data.name}</h3>
                    <table className="table table-responsive">
                        <tbody>
                            <tr>
                                <td>
                                    Age:
                                </td>
                                <td>
                                    {this.props.data.age}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Favorite animal:
                                </td>
                                <td>
                                    {this.props.data.image}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Phone:
                                </td>
                                <td>
                                    {`8 ${this.props.data.phone}`}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <strong>Favorite phrase:</strong> {this.props.data.phrase}
                    </div>
                </div>
            </div>
        </div>
    );
   }
}
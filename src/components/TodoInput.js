import React, { Component } from 'react'

export default class TodoInput extends Component {
    state = {
        enableInput: true,
        enableButton: true
    }

    handleInputChange = (event) => {
        this.setState({ enableInput: event.target.checked });
    }

    handleButtonChange = (event) => {
        this.setState({ enableButton: event.target.checked });
    }

    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props  
        const {enableInput, enableButton} = this.state;

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-info text-white">
                            <i className="fas fa-briefcase" />
                            </div>
                        </div>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="New Todo"
                            value={item}
                            onChange={handleChange}
                            disabled={!enableInput}
                        />
                    </div>

                    <div className="row justify-content-center my-2">
                        <div className="col-sm-6 form-check text-center">
                            <label className={`btn btn-block mt-3 ${editItem ? 'btn-success' : 'btn-info'}`}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={enableInput}
                                    onChange={this.handleInputChange}
                                    style={{display: 'none'}}
                                />
                                Enable Input
                            </label>
                        </div>

                        <div className="col-sm-6 form-check text-center">
                            <label className={`btn btn-block mt-3 ${editItem ? 'btn-success' : 'btn-info'}`}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={enableButton}
                                    onChange={this.handleButtonChange}
                                    style={{display: 'none'}}
                                />
                                Enable Button
                            </label>
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className={`btn btn-block mt-3 ${editItem ? 'btn-success' : 'btn-info'}`}
                        disabled={!enableButton}
                    >
                        {editItem ? 'Edit task' : 'Add new task'}
                    </button>
                </form>
            </div>
        )
    }
}

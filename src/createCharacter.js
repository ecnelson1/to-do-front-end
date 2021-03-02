import React, { Component } from 'react'
import { makeChar } from './appUtils.js' 
export default class CreateCharacter extends Component {
    state = {
        name: '',
        seasons: 1,
        is_divine: false,
        type_id: 1,

    }
    handleNameChange = (e) => this.setState({ name: e.target.value })

    handleSeasonsChange = (e) => this.setState({ seasons: Number(e.target.value) })

    handleIsDivineChange = (e) => this.setState({is_divine: !this.state.is_divine })

    handleTypeChange = (e) => this.setState({
        type_id: Number(e.target.value)
    })

    handleSubmit = async(e) => {
        e.preventDefault();
        await makeChar(this.state);
        this.props.history.push('/cast');
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Seasons on:
                        <input value={this.state.seasons} type="number" onChange={this.handleSeasonsChange} />
                    </label>
                    <label>
                        Is Divine?
                        <input value={this.state.is_divine} type="checkbox" onChange={this.handleIsDivineChange} />
                    </label>
                    <label>
                        <select value={this.state.type} onChange={this.handleTypeChange}>
                            <option value={1}>Human</option>
                            <option value={2}>Angel</option>
                            <option value={3}>God(ess)</option>
                            <option value={4}>Demon</option>
                        </select>
                    </label>
                    <button>Make Character</button>
                </form>
            </div>
        )
    }
}
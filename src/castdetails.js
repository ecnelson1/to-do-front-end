import React, { Component } from 'react'
import { getTypes, updateChar, getChar, deleteChar } from './appUtils';

export default class CastDetailsPage extends Component {
    state = {
        name: '',
        seasons: 1,
        is_divine: false,
        type_id: 1,
        types: []
      }
    
    componentDidMount= async() => {
            const char = await getChar(this.props.match.params.id);
            const types = await getTypes();
            this.setState({
                name: char.name,
                seasons: char.seasons,
                is_divine: char.is_divine,
                type_id: char.type_id,
                type: types.type,
                types: types
              })
          }
          handleDelete = async (e) => {
              await deleteChar(this.props.match.params.id);
              this.props.history.push('/cast')
          }
          handleNameChange = (e) => this.setState({ name: e.target.value })
          handleSeasonsChange = (e) => this.setState({ seasons: Number(e.target.value) })
          handleIsDivineChange = (e) => this.setState({is_divine: !this.state.is_divine })
          handleTypeChange = (e) =>this.setState({ type_id: Number(e.target.value) })
          handleSubmit = async(e) => {
              e.preventDefault();
              await updateChar(this.props.match.params.id, this.state);
              this.props.history.push('/cast');
          }
          render() {
              return (
                  <div>
                      Character Details
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
                              <select value={this.state.types.type} onChange={this.handleCategoryChange}>
                            {
                                this.state.types
                                    .map(type => 
                                    <option value={type.id}  key = {type.id} selected={this.state.type_id === type.id}>
                                        {type.type}
                                    </option>
                                )
                            }
                              </select>
                          </label>
                          <button>Update Character</button>
                      </form>
                          <button onClick={this.handleDelete}>Delete Character</button>
                  </div>
              )
          }
    }

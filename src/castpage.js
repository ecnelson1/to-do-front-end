import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getCast } from './appUtils.js';
export default class SearchPage extends Component {
    state = {
        castMembers: [],
        loading: false
        }
      componentDidMount = async () => {
          this.setState({loading :true,});
          const CastMembers =await getCast();
          this.setState({
              castMembers: CastMembers,
              loading: false
            })
        }
    render() {
        return (
            <div className = "luci-list">
                {this.state.castMembers.map(member => <Link
                to ={`/cast/${member.id}`} key={member.name}>
                <div className="character">
                    <p>{member.name}</p>
                    <p>{member.type}</p>
                    <p>{member.seasons}</p>
                    <p>{member.is_divine 
                        ? 'Divine Blood Detected!' 
                        : 'No Divinity'}</p>
                </div>
                </Link>
                )}
            </div>
        )
    }
}
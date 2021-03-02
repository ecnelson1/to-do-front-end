import React, { Component } from 'react'

export default class CastList extends Component {
    render() {
        return (
            <div className = "luci-list">
                {this.props.castMembers.map(member => <link to ={`/cast/${member.id}`} ket={member.name}>
                <div className="character">
                    <p>{member.name}</p>
                    <p>{member.type}</p>
                    <p>{member.seasons}</p>
                    <p>{member.is_divine 
                        ? 'Divine Blood Detected!' 
                        : 'No Divinity'}</p>
                </div>
                </link>
                )}
            </div>
        )
    }
}
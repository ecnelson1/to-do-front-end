import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'



export default withRouter(class PageHeader extends Component {
    render() {
        return (
            <header>{this.props.location !== '/cast' &&
                 <NavLink exact activeClassName = "selected" to = "/cast">
                    Search List
                </NavLink>}
                
                {
                    this.props.location.pathname !== '/' &&
                   <NavLink exact activeClassName = "selected" to = "/">
                    Home
                </NavLink>
                }
                {
                    this.props.location.pathname !== '/create' &&
                   <NavLink exact activeClassName = "selected" to = "/create">
                    Create Character
                </NavLink>
                }
            </header>
         )
    }})
import React from 'react'
import axios from 'axios'
// import { BrowserRouter as Redirect } from 'react-router-dom'

import ArtContainer from './Components/ArtContainer/ArtContainer.jsx'

import './profile.css'

// eslint-disable-next-line react/prefer-stateless-function
export default class Profile extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)

    this.loadPage = this.loadPage.bind(this)
  }

  loadData() {
    const { user } = this.props
    const { _id: userId } = user

    axios.get(`/api/users/${userId}`)
      .then((res) => {
        const userArt = res.data.art

        return userArt.map(art => <ArtContainer props={art} onClick={this.loadPage} />)
      })
  }

  // eslint-disable-next-line class-methods-use-this
  loadPage(e) {
    // load a redirect
    console.log('hey, this isn\'t finished', e)
  }

  render() {
    // const { user } = this.state
    return (
      <div>
        <div id="user-art-container">
          {this.loadData()}
        </div>
      </div>
    )
  }
}

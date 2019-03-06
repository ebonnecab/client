import React from 'react'
import axios from 'axios'

import './NewPost.css'

export default class NewPost extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target)

    axios.post('https://squilla-api.herokuapp.com/api/art/', formData)
      .then(res => console.log(res))
      .catch(err => console.log(err.message))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="file" name="art" />
        <input type="text" name="name" />
        <input type="text" name="description" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios'

class TopicSelector extends Component {
  state = {
    topics: []
  }

  render() {
    return (
      <select>
        <option value="select-topic">Select Topic</option>
        <option value="coding">Coding</option>
        <option value="cooking">Cooking</option>
        <option value="football">Football</option>
      </select>
    )
  }


}

export default TopicSelector

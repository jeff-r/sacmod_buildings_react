import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Architects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      architects: []
    }
  }

  componentWillReceiveProps (nextProps) {
    this.getArchitects()
  }

  componentDidMount() {
    this.getArchitects()
  }

  getArchitects () {
    var url = 'http://localhost:3001/architects.json'
    fetch(url).then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        architects: json.data.map(architect => ({name: architect.attributes.name, id: architect.id}) )
      })
    })
  }

  render() {
    return (
      <div>
        <p>Hi!</p>
        {
          this.state.architects.map(function(architect) {
            return <li>{architect.name}</li>
          })
        }
      </div>
    )
  }
}

export default Architects

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Architect extends React.Component {
  constructor(props) {
    console.log("Architect constructor")
    super(props)
    console.log(props)
    this.state = {
      architect: {id: props.match.params.id}
    }
    this.getArchitect(this.state.architect.id)
  }

  componentWillMount () {
    console.log('Architect#componentWillMount')
  }

  getArchitect (id) {
    var url='http://localhost:3001/architects/' + id + '.json'
    console.log("get " + url)
    fetch(url).then((response) => {
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({
        architect: json
      })
    })
  }

  componentDidMount() {
    this.getArchitect(this.state.architect.id)
  }

  componentWillReceiveProps (nextProps) {
    console.log("**********************")
    console.log(nextProps)
  }

  render() {
    return (
    <div className='row'>
      <div className='building-title'>{this.state.architect.name}</div>
    </div>
    )
  }
}

export default Architect

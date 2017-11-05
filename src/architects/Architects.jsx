import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const ArchitectLink = (props) => (
  <Link to={`/architects/${props.architect.id}`}>
    {props.architect.name}
  </Link>
)

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
      <Router>
        <div>
          <div class='row'>
            <div class='col building-title'>Sacramento Architects</div>
          </div>
          <ul>
            {
              this.state.architects.map(architect => (
                <li><ArchitectLink architect={architect} /></li>
              ))
            }
          </ul>
        </div>
      </Router>
    )
  }
}

export default Architects

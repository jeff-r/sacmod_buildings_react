import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Architect from '../architect/Architect'


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

  shouldComponentUpdate () {
    console.log('Architects#shouldComponentUpdate')
    return (true);
  }

  componentWillReceiveProps (nextProps) {
    console.log('Architects#componentWillReceiveProps')
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
          <Switch>
            <Route path="/architects/:id" component={Architect}/>
            <Route path="/" render={() => (
              <div>
                <div className='row'>
                  <div className='col building-title'>Sacramento Architects</div>
                </div>
                <ul>
                  {
                    this.state.architects.map(architect => (
                      <li key={architect.id}><ArchitectLink architect={architect}/></li>
                    ))
                  }
                </ul>
              </div>
            )
            }/>
        </Switch>


        </div>
      </Router>
    )
  }
}

export default Architects

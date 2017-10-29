import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

class Building extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address:'',
      buildingId: props.match.params.id
    }
  }

  elementId () {
    return this.props.match.params.id
  }

  getData (buildingId) {
    var url = 'http://localhost:3001/buildings/' + buildingId + '.json'
    fetch(url).then((response) => {
      return response.json()
    }).then((json) => {
      this.architectId = json.architect_id
      console.log(json)
    })
  }

  prevId () {
    var id = parseInt(this.elementId(), 10)
    if (id > 1) {
      id -= 1
    }
    return id
  }

  nextId () {
    var id = parseInt(this.elementId(), 10) + 1
    return id
  }

  render() {
    this.getData(this.elementId())
    return (
      <div>
      <p>id: {this.elementId()}</p>
      <p>
        <Link to={`/buildings/${this.prevId()}`}>Prev</Link> |&nbsp;
        <Link to={`/buildings/${this.nextId()}`}>Next</Link>
      </p>
      </div>
    )
  }
}

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/buildings/2`}>
          Building
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/buildings/1">Building 1</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/buildings/:id" component={Building}/>
    </div>
  </Router>
)
export default BasicExample

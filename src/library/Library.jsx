import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Architects from '../architects/Architects'
import Architect from '../architect/Architect'

const Library = () => (
  <Router>
    <div>
      <Route exact path="/" component={Architects}/>
      <Route path="/architects/:id" component={Architect}/>

      <Link to='/architects/5'>Architect 5</Link>
    </div>
  </Router>
)

export default Library

// Functional Component
// const Welcome = () => <h1>Hello, User</h1>

// class Component
// import {Component} from 'react'

// class Welcome extends Component {
//   render() {
//     return <h1>Hello Bishal</h1>
//   }
// }

// Accessing Props
import {Component} from 'react'

class Welcome extends Component {
  render() {
    // object destructuring 
    const {name} = this.props
    return <h1>Hello, {name} Pradhan</h1>
  }
}

export default Welcome

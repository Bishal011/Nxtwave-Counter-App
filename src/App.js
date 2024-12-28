import Welcome from './components/Welcome'
import Counter from './components/Counter'

// const App = () => {
//   return <Welcome />
// }

// passing props

const App = () => {
  return (
    <div>
      <Welcome name="Bishal" />
      <Counter />
    </div>
  )
}
export default App

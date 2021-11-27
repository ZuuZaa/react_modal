import ToDo from "./components/todo";
import Container from "./components/container";


function App() {
  return (
    <Container>
      <ToDo title="Greating" description="hello" />
      <ToDo title="Breakfast" description="Coffee and pankeks" />
      <ToDo title="Walking" description="Sea side" />
      <ToDo title="Meditation" description="Be yourself" />
    </Container>
  )
}

export default App;

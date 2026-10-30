import Counter from "./components/Counter";
import ProfileCard from "./components/ProfileCard";
import SearchBox from "./components/SearchBox";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Week 9: React Hooks Assignment</h1>
      <Counter />
      <ProfileCard />
      <SearchBox />
      <TodoList />
    </div>
  );
}

export default App;

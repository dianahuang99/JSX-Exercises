const App = () => (
  <div>
    <Person
      name="Diana"
      age={22}
      hobbies={["coding", "watching tv", "jigsaw puzzles"]}
    />
    <Person
      name="Derek"
      age={25}
      hobbies={["drawing", "fishing", "reading", "baseball"]}
    />
    <Person name="James" age={16} hobbies={["knitting", "crocheting"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

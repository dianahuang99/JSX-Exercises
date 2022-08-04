const App = () => (
  <div>
    <Tweet username="username1" name="name1" date="8/2/2022" message="Hello" />
    <Tweet username="username2" name="name2" date="8/6/2022" message="Hello" />
    <Tweet username="username3" name="name3" date="8/8/2022" message="Hello" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

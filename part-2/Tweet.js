const Tweet = ({
  username = "dianahuang",
  name = "diana",
  date = "8/3/2022",
  message = "Hello",
}) => (
  <div>
    <p>Username: {username}</p>
    <p>Name: {name}</p>
    <p>Date: {date}</p>
    <p>Message: {message}</p>
  </div>
);

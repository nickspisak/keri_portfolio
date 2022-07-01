import "./App.css";

function App() {
  return (
    <div>
      <img className="picture" src="/images/first.jpeg" alt="image" />
      <img className="picture" src="/images/second.jpeg" alt="image" />
      <img className="picture" src="/images/third.jpeg" alt="image" />
      <img className="picture" src="/images/fourth.jpeg" alt="image" />
      <img className="picture" src="/images/fifth.jpeg" alt="image" />
      <div className="container">
        <div className="row mb-3">
          <div className="col mt-3">
            <img className="insta" src="/images/insta.jpeg" alt="image" />
          </div>
          <div className="col mt-3">
            <h2>Profile theme created in Highschool</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

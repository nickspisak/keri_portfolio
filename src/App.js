import "./App.css";

function App() {
  return (
    <div>
      <img className="picture" src="/images/first.jpeg" alt="portfolio" />
      <img className="picture" src="/images/second.jpeg" alt="portfolio" />
      <img className="picture" src="/images/third.jpeg" alt="portfolio" />
      <img className="picture" src="/images/fourth.jpeg" alt="portfolio" />
      <img className="picture" src="/images/fifth.jpeg" alt="portfolio" />
      <div className="container">
        <div className="row mb-3">
          <div className="col mt-3">
            <img className="insta" src="/images/insta.jpeg" alt="insta" />
          </div>
          <div className="col mt-3">
            <h4>Personal Profile theme created in Highschool</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

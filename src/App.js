import "./App.css";
import Gallery from "./Gallery";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Gallery />
      </div>
      <footer className="gallery-footer">
        <p>
          This page was coded by
          <a
            href="https://github.com/Mahdia-123"
            target="_blank"
            rel="noreferrer"
          >
            Mahdia Khamoosh
          </a>
          and is
          <a
            href="https://github.com/Mahdia-123/afghanista-sightseeing-places"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
          and hosted on
          <a
            href="https://vanilla-dictionary-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;

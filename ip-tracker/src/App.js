import "./App.css";
import "./assets/css/style.scss";

function App() {
    return (
        <div className="main">
            <div className="header">
                <h1>IP Address Tracker</h1>
                <div className="search-box"><input type="search" name="ip" id="ip" />
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                        <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
                    </svg>
                </button></div>
            </div>
            <div className="map">soll</div>
        </div>
    );
}

export default App;

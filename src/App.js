import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [lockers, setLockers] = useState([]);
  const [selectedLocker, setSelectedLocker] = useState(null);

  useEffect(() => {
    init();
  }, []);

  function init() {
    let lockerList = [];
    for (let index = 0; index < 50; index++) {
      let locker = {
        id: index + 1,
        available: Math.random() < 0.5,
      };
      lockerList.push(locker);
    }
    setLockers(lockerList);
  }

  function handleClick() {
    removePreviousLocker();
    for (let index = 0; index < lockers.length; index++) {
      if (index > 0 && index < lockers.length - 1) {
        if (
          lockers[index - 1].available &&
          lockers[index].available &&
          lockers[index + 1].available
        ) {
          selectLocker(lockers[index].id);
          return;
        }
      }
    }
    for (let index = 0; index < lockers.length; index++) {
      const el = lockers[index];
      if (el.available) {
        selectLocker(el.id);
        return;
      }
    }
  }

  function removePreviousLocker() {
    if(!selectedLocker) return 
    lockers[selectedLocker - 1].available = false
    setSelectedLocker(null);
  }

  function selectLocker(id) {
    let selectedLocker = document.getElementById(id);
    selectedLocker.style.backgroundColor = "blue";
    setSelectedLocker(id);
  }

  return (
    <div className="main-container">
      <div className="inner-container">
        <div className="button-container">
          <button onClick={handleClick}>The reserve button</button>
        </div>
        <div className="locker-list-container">
          {lockers.length
            ? lockers.map((el) => {
                return (
                  <div
                    className="locker-container"
                    key={el.id}
                    id={el.id}
                    style={{ backgroundColor: el.available ? "green" : "red" }}></div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default App;

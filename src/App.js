import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [lockers, setLockers] = useState([]);
  const [selectedLocker, setSelectedLocker] = useState(null);

  const lockerStock = 48;
  const availableColor = "#24a746";
  const notAvailableColor = "#a83131";
  const selectedColor = "#2953da";

  useEffect(() => {
    init();
  }, []);

  function init() {
    let lockerList = [];
    for (let index = 0; index < lockerStock; index++) {
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
    alert("please refrech the page to restock the lockers");
  }

  function removePreviousLocker() {
    if (!selectedLocker) return;
    lockers[selectedLocker - 1].available = false;
    setSelectedLocker(null);
  }

  function selectLocker(id) {
    let selectedLocker = document.getElementById(id);
    selectedLocker.style.backgroundColor = selectedColor;
    setSelectedLocker(id);
  }

  return (
    <div className="main-container center">
      <div className="inner-container center">
        <div className="text-container">
          <h3>The Gym Locker Reserve App</h3>
          <span>
            You get a locker by clicking the button. The green ones are available, the red ones are
            not and the blue one is yours. If you want another one, click the button again. If you
            run out of available lockers, just refrech the page and we'll restock.
          </span>
        </div>
        <div className="button-container center">
          <button onClick={handleClick}>The reserve button</button>
        </div>
        <div className="locker-list-container center">
          {lockers.length
            ? lockers.map((el) => {
                return (
                  <div
                    className="locker-container"
                    key={el.id}
                    id={el.id}
                    style={{
                      backgroundColor: el.available ? availableColor : notAvailableColor,
                    }}></div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default App;

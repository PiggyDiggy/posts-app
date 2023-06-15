import React, { useEffect, useRef } from "react";
import { type Location, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Header } from "./components/Header";
import { locationChange } from "./redux/actions/router";

type Props = {
  children: React.ReactNode;
};

function App({ children }: Props) {
  const location = useLocation();
  const dispatch = useDispatch();

  const previousLocation = useRef<Location | null>(null);

  useEffect(() => {
    dispatch(locationChange({ oldLoc: previousLocation.current, newLoc: location }));
    previousLocation.current = location;
  }, [location, dispatch]);

  return (
    <div className="App">
      <Header />
      <main className="mx-3">{children}</main>
    </div>
  );
}

export default App;

import { useState } from "react";

import AllPages from "./AllPages";
import HomePage from "./HomePage";
import ChangeNavigationService from "../Services/ChangeNavigationService";

export default function Routes() {
  const [showHome, setShowHome] = useState("false");

  ChangeNavigationService.checkShowHome(1)
    .then((showHome) => {
      setShowHome(showHome.showHome);
    })
    .catch((err) => console.log(err));

  return <>{showHome === "true" ? <HomePage /> : <AllPages />}</>;
}

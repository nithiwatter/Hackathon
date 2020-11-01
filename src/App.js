import { CssBaseline, ThemeProvider } from "@material-ui/core";

import CreateAccount from "./views/CreateAccount";
import Done from "./views/Done";
import Done2 from "./views/Done2";
import Final from "./views/Final";
import Login from "./views/Login";
import React from "react";
import Registration from "./views/Registration";
import Success from "./views/Success";
import theme from "./theme";

const display = (page, setPage) => {
  switch (page) {
    case 0:
      return <Registration setPage={setPage} />;
    case 1:
      return <CreateAccount setPage={setPage} />;
    case 2:
      return <Done setPage={setPage} />;
    case 3:
      return <Login setPage={setPage} />;
    case 4:
      return <Success setPage={setPage} />;
    case 5:
      return <Final setPage={setPage}/>;
    case 6:
        return <Done2 />;
    default:
      return <></>;
  }
};

function App() {
  const [page, setPage] = React.useState(0);
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {/* <Registration /> */}
        {/* <Login /> */}
        {/* <CreateAccount /> */}
        {display(page, setPage)}
      </ThemeProvider>
    </>
  );
}

export default App;

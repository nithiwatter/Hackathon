import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Registration from "./views/Registration";
import Login from "./views/Login";
import CreateAccount from "./views/CreateAccount";
import Done from "./views/Done";
import Success from "./views/Success";
import Final from "./views/Final";

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
      return <Final />;
    default:
      return <></>;
  }
};

function App() {
  const [page, setPage] = React.useState(3);
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

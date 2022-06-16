import "antd/dist/antd.min.css";
import { StyledThemeProvider } from "definitions/styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "redux/store";

import Home from "pages";

function App(): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <StyledThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <div className="App">
            <Home />
          </div>
        </Provider>
      </QueryClientProvider>
    </StyledThemeProvider>
  );
}

export default App;

import "antd/dist/antd.min.css";

import { QueryClient, QueryClientProvider } from "react-query";

import Home from "pages";
import { Provider } from "react-redux";
import { StyledThemeProvider } from "definitions/styled-components";
import store from "redux/store";

function App(): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <StyledThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Home />
        </Provider>
      </QueryClientProvider>
    </StyledThemeProvider>
  );
}

export default App;

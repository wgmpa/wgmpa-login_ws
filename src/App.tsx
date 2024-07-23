import DefaultTemplate from "./components/DefaultTemplate/DefaultTemplate";
import { NewsProviders } from "./providers/NewsProviders";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <NewsProviders>
        <DefaultTemplate>
          <Router />
        </DefaultTemplate>
      </NewsProviders>
    </>
  );
}

export default App;

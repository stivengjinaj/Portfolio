import WelcomePage from "./screens/WelcomePage.tsx";
import {TranslationProvider} from "./TranslationContext.tsx";

function App() {

  return (
      <TranslationProvider>
          <WelcomePage />
      </TranslationProvider>
  );
}

export default App;
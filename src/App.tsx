import {TranslationProvider} from "./TranslationContext.tsx";
import {RouterProvider} from "@tanstack/react-router";
import {router} from "./router.tsx";

function App() {

  return (
      <TranslationProvider>
          <RouterProvider router={router} />
      </TranslationProvider>
  );
}

export default App;
import { lazy } from "react";
import { NotFound } from "@react-monorepo/ui";
import { RouterGenerator } from "@react-monorepo/share";

function viewLoader(path: string) {
  return lazy(() => {
    return import("../views" + path).catch(error => {
      return new Promise(resolve => resolve({ default: () => NotFound }));
    });
  });
}

// const a = <div style={{ a }}></div>

export function App() {
  return <RouterGenerator project={"shop"} viewLoader={viewLoader} />;
}

export default App;

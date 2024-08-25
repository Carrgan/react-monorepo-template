import * as React from "react";

import { Route, Routes } from "react-router-dom";
import { Layout, NotFound } from "@react-monorepo/ui";

const Shop = React.lazy(() => import("shop/Module"));

export function App() {
  return (
    <Layout>
      <React.Suspense>
        <Routes>
          <Route path="/shop/*" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </Layout>
  );
}

export default App;

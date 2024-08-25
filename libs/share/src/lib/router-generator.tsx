import { Route, Routes, useLocation } from "react-router-dom";
import { ComponentType, LazyExoticComponent, Suspense, useEffect, useState } from "react";

interface IRouterGenerator {
  project: string;
  viewLoader(path: string): LazyExoticComponent<ComponentType<any>>;
}

export function RouterGenerator({ project, viewLoader }: IRouterGenerator) {
  const location = useLocation();
  const [Component, setLoadedComponent] = useState<LazyExoticComponent<any>>();

  useEffect(() => {
    const path = `${location.pathname.replace(`/${project}`, "")}`;
    const loadedComponent = viewLoader(path);
    setLoadedComponent(loadedComponent);
  }, []);

  return (
    <Routes>
      <Route path={"*"} element={<Suspense>{Component && <Component />}</Suspense>} />
    </Routes>
  );
}

export default RouterGenerator;

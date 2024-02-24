import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const LastingmemoriesJoli = React.lazy(
  () => import("pages/LastingmemoriesJoli"),
);
const Frame = React.lazy(() => import("pages/Frame"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frame" element={<Frame />} />
          <Route
            path="/lastingmemoriesjoli"
            element={<LastingmemoriesJoli />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

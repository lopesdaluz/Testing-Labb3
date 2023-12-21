// import React from "react";
import Home from "./Pages/Home";
import Gift from "./Pages/Gift";
import Test from "../src/components/Test";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import {
  createBrowserRouter,
  Router,
  Route,
  Link,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

// export default App;
function Root() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
function App() {
  const router = createBrowserRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <Gift />, path: "/gift/:cardId" },
        { element: <Test />, path: "/Test" },
      ],

      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

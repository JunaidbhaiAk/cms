import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.tsx";
import Contact from "./routes/Contact.tsx";
import ModalProvider from "./context/modal.context.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import Analysis from "./routes/Analysis.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Contact />,
      },
      {
        path: "/analysis",
        element: <Analysis />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ModalProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ModalProvider>
  </Provider>
);

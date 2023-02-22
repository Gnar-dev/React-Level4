import "./App.css";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Router />
      </QueryClientProvider>
    </div>
  );
}

export default App;

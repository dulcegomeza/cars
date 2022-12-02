import AppRouter from "./routes/AppRouter";
import { UserProvider } from "./context/UserProvider";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ModelProvider from './context/ModelProvider';
import 'animate.css';

function App() {
  return (
    <>
      <UserProvider>
      <PayPalScriptProvider options={{ "client-id": "AemE31m31cXaJSLZOKUI66oMaUAIOxNsrOodbaihysPrkRKNryRDvvvaMD2zMFp71ed7tZE-UYO_srHG" }}>
          <ModelProvider>
          <AppRouter />
          </ModelProvider>
        </PayPalScriptProvider>
      </UserProvider>
    </>
  );
}

export default App;
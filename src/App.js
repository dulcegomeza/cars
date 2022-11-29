import AppRouter from "./routes/AppRouter";
import { UserProvider } from "./context/UserProvider";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import 'animate.css';

function App() {
  return (
    <>
      <UserProvider>
        <PayPalScriptProvider options={{ "client-id": " " }}>
          <AppRouter />
        </PayPalScriptProvider>
      </UserProvider>
    </>
  );
}

export default App;
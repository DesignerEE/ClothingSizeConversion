import { Switch, Route } from "wouter";
import SizeConverter from "./pages/SizeConverter";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Switch>
        <Route path="/" component={SizeConverter} />
      </Switch>
    </div>
  );
}

export default App;
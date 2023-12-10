// import Link from "./components/Link";
import Route from "./components/Route";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <div className="h-full">
      <Route path="/auth">
        <Auth />
      </Route>
    </div>
  );
};

export default App;

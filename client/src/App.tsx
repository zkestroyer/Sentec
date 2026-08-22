/* SENTEC / Signal / Structure
 * App-level routing keeps the landing page and secondary field pages in one coherent site.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Partners from "./pages/Partners";
import Team from "./pages/Team";
import Events from "./pages/Events";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/partners" component={Partners} />
    <Route path="/team" component={Team} />
    <Route path="/events" component={Events} />
    <Route>{() => <Home />}</Route>
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark" switchable><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

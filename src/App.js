import "./App.css";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";
import Toolbarr from "./components/Toolbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Toolbarr />
      <main>
        {/* Hero Section */}
        <Hero />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;

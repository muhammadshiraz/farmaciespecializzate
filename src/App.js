import React from 'react';
import { Cards, CountryPicker } from "./components";
import styles from "./App.module.css";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import InfoElements from './components/InfoSection';
import { fetchData } from "./api";
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Router>
          <Sidebar />
          <Navbar />
          <HeroSection />
          <InfoElements />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Cards data={data} country={country} />          
        </Router>        
      </div>
    );
  }
}

export default App;

import React from 'react';
import {Cards, Chart, CountryPicker} from './Components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/image.png';



class App extends React.Component {
    state = {
        data : {},
        country: '',
    }

    async componentDidMount() {     //builtin async component
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);   //fetch the data       
        this.setState({ data: fetchedData, country: country });   //set the state
    }

    render() { 
        const { data, country } = this.state;
            
        return ( 
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
         );
    }
}
 
export default App;
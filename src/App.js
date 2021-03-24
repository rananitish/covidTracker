import React from 'react';
import {Cards, Chart ,CountryPicker} from './Components';
import fetchData from './api/fetchData';
import './App.css';


class App extends React.Component{
  state={
    data:{},
  }
  async componentDidMount() {               //getting api async is for ansynchronous data
    const fetchedData = await fetchData();
    this.setState({
      data:fetchedData
    });
  }
  render()
  {
    const {data}=this.state;
    return(
      <div className='container'>
      <Cards data={data}/>
      <Chart/>
      <CountryPicker/>
      </div>
    )
  }
}
export default App;
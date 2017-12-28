import React, { Component } from 'react';
import logo from './orderandprint.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
		<h1 className="App-title">Order & Print</h1>
          UIZ BERLIN <br/>  &nbsp;&nbsp;&nbsp;<br/><br/>
	
		   <br/> <font color="openblue"><b><big>TOLGA KUYUCUK</big></b></font>
		   
          
        </header>
        <p className="App-intro">
		
		<img src={logo} className="App-logo" alt="LOGO" />
		
		<br/><br/>
<big><font color="red"><b>UIZ Umwelt und Iinformationstechnologie Zentrum GmbH</b></font></big> <br/>
<font color="blue">Environment and Information Technology Center – UIZ  </font> <br/>

		The world is evolving with each passing day and it is evident with the environmental issues that are becoming more prominent. Environment and information technologies are becoming major issues which are beginning to require maximum attention. UIZ is a company which has been registered under the German Company Registration Act. The foundation of the company is inspired by the idea of the European marketplace penetration, where as a starting point the Germany, Berlin (2014) has been chosen. The versatility of our company has enabled us to develop a multifaceted expertise that has broadened our experience to match the demands of today.

UIZ is a technology company with an international focus, approach, and support, with the highest level of highly creative strategic planning and high-quality services available, developed as a cross-section of environmental science and technology. We propose to provide high quality IT and environmental technology solutions for small businesses and large corporations, flexible for any-size projects, BPO service with full-service along with support to clients on a per-project and recurring basis. Proposed services include:


Geoinformatics Services and Solutions (Remote Sensing, GIS and more),
Hydrogeological Services,
Environmental Services (Water Management, and other natural resource directing )
Web Development Services
Business Processes Outsourcing
Academic Research and Consultancy
Software Development (Mobile Application for Survey Conducting)
          
        </p>
      </div>
    );
  }
}

export default App;

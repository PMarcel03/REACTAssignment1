import React, {useState, useEffect} from 'react'; //Loads usestate functionality from REACT
import SCPData from './Data.json' //Loads Data JSON file containing SCP entries
import Style from './Style.css'; //Loads Style Sheet

function SCPInfo(){
    //Creates a use state
    const [scpInfo, setSCPInfo] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
    //Set SCP data from the Data.json to SCPINFO
    setSCPInfo(SCPData);
},[]);

//Next Entry Button Functionality
const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) %scpInfo.length);
}

//Previous Entry Button Functionality
const handlePreviousClick  = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? scpInfo.length -1: prevIndex -1)
}

//Creates CurrentSCP variable which is allocated to an index which will be used to switch between entries
const currentSCP = scpInfo[currentIndex];

return (
    //Loads SCP information and Navigation menu
    <div>
         <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://i.imgur.com/QJoRQPn.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                        SCP Viewer
                    </a>
                    <div className='scp-buttons'>
                        <button className="btn btn-outline-light" onClick={handlePreviousClick}>Previous Entry</button>
                        <button className="btn btn-outline-light" onClick={handleNextClick}>Next Entry</button>
                    </div>
                </div>
            </nav>
        </div>
        
        {currentSCP && (
            <div className="container">
                <h1 className='display-4 text-center'>SCP Subject</h1>
                <h4 className='text-center'>{currentSCP.ID.replace('-', ' ')}</h4>
                <h2 className='text-center'>SCP Class</h2>
                <h4 className='text-center '>{currentSCP.Class}</h4>
                <h2 className='text-center'>SCP Procedure</h2>
                <p className='text-center text-wrap'>{currentSCP.Procedure}</p>
                <h2 className='text-center'>SCP Description</h2>
                <p className='text-center text-wrap'>{currentSCP.Description}</p>
                {currentSCP.Image && <img src={currentSCP.Image} alt={`SCP-${currentSCP.ID}`} className='scp-image' />}
            </div>
        )}
      
    
    </div>
);
}

export default SCPInfo;

// import './App.css';
import './css/style.css';
// import './css/bootstrap.css';
// import './css/responsive.css';
import Preloader from  './Components/Preloader';
import { useEffect, useState } from 'react';
import Home from './Components/Home';
import Todo from './Components/Todo';

function App() {
    const [showLoader, setShowLoader] = useState(true)
    const headerPass = "This is a header"
    useEffect(()=>{
        setTimeout(()=>{
          loaderChange(false)
        }, 1000)
    }, []);

    // const setItemDetail = (item) =>{
    //   loaderChange(true)
    //   // setSelectItem(item);
    //   setTimeout(()=>{
    //     setShowLoader(false)
    //     loaderChange(false)
    //   }, 1000)
    // }

    const loaderChange = (show = false) =>{
      setShowLoader (show)
    }

  return (
    <>   
      {showLoader===true? 
      (<Preloader  />)  
      :
      (
        <>
          {/* <Header headerPass={headerPass} /> */}
          <Home />
          {/* <Main /> */}

        </>
      )
      }
      
      
      
      
      
      
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import "./navbar.css";
import logo from "../../assets/logo.png";
import Metamask from "../../assets/metamask.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import axios from "axios";
import {MdMonitor} from "react-icons/md"
import {AiFillWechat, AiOutlineLineChart,AiTwotoneThunderbolt} from "react-icons/ai"
 import{SlGraph} from 'react-icons/sl'
import {MdOutlineInsertChart} from "react-icons/md"
// const Navbar1 = () => {
//   const [dropdownIndex, setDropdownIndex] = useState(null);

//   const [isConnectOpen, setIsConnectOpen] = useState(false);

//   const [connected, setConnected] = useState(false);

//   const [connectedAddress, setConnectedAddress] = useState("");

//   const connectToMetamask = async () => {
//     try {
//       await window.ethereum.enable();
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();

//       const address = await signer.getAddress();
//       const truncatedAddress = `${address.slice(0, 4)}...${address.slice(-4)}`;

//       setConnectedAddress(truncatedAddress);
//       setConnected(true);

//       // Add any other desired functionality
//     } catch (error) {
//       console.error("Error connecting to Metamask:", error);
//     }
//   };

//   const toggelDropdown = () => {
//     setIsConnectOpen(!isConnectOpen);
//   };

//   const handleMouseEnter = (index) => {
//     setDropdownIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setDropdownIndex(null);
//   };

//   const connectLinks = [
//     {
//       name: "Link 1",
//       logo: "logo1.png",
//       link: "#link1",
//     },
//     {
//       name: "Link 2",
//       logo: "logo2.png",
//       link: "#link2",
//     },
//     {
//       name: "Link 3",
//       logo: "logo3.png",
//       link: "#link3",
//     },
//   ];

//   return (
//     <nav className="navbar navbar-expand-xl navbar-light ">
//        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//       <div className="left">
//         <div className="logo">
//           <img src={logo} alt="" />
//         </div>
//         <div className="links">
//           <ul>
//             <li
//               onMouseEnter={() => handleMouseEnter(0)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <span>
//                 Trade <RiArrowDropDownLine size={24} />
//               </span>
//               {dropdownIndex === 0 && (
//                 <div className="dropdown-content">
//                   <Link href="#">Link 1</Link>
//                   <a href="#">Link 2</a>
//                   <a href="#">Link 3</a>
//                 </div>
//               )}
//             </li>
//             <li
//               onMouseEnter={() => handleMouseEnter(1)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <span>
//                 DAO <RiArrowDropDownLine size={24} />
//               </span>
//               {dropdownIndex === 1 && (
//                 <div className="dropdown-content">
//                   <a href="#">Link 4</a>
//                   <a href="#">Link 5</a>
//                   <a href="#">Link 6</a>
//                 </div>
//               )}
//             </li>
//             <li
//               onMouseEnter={() => handleMouseEnter(2)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <span>
//                 Earn <RiArrowDropDownLine size={24} />
//               </span>
//               {dropdownIndex === 2 && (
//                 <div className="dropdown-content">
//                   <a href="#">Link 7</a>
//                   <a href="#">Link 8</a>
//                   <a href="#">Link 9</a>
//                 </div>
//               )}
//             </li>
//             <li
//               onMouseEnter={() => handleMouseEnter(3)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <span>
//                 More <RiArrowDropDownLine size={24} />
//               </span>
//               {dropdownIndex === 3 && (
//                 <div className="dropdown-content">
//                   <a href="#">Link 10</a>
//                   <a href="#">Link 11</a>
//                   <a href="#">Link 12</a>
//                 </div>
//               )}
//             </li>
//             <li
//               onMouseEnter={() => handleMouseEnter(4)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <span>
//                 Bridges <RiArrowDropDownLine size={24} />
//               </span>
//               {dropdownIndex === 4 && (
//                 <div className="dropdown-content">
//                   <Link href="#">Link 13</Link>
//                   <Link href="#">Link 14</Link>
//                   <a href="#">Link 15</a>
//                 </div>
//               )}
//             </li>
//             <li>
//               <a href="">Buy Crypto</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="navbar-right">
//         {connected ? (
//           <div className="isConnected">
//             <div>
//               <button
//                 className="connect-button"
//                 onClick={() => {
//                   toggelDropdown();
//                 }}
//               >
//                 Ethereum <RiArrowDropDownLine size={24} />
//               </button>

//               {isConnectOpen ? (
//                 <>
//                   <div className="dropdown-content2">
//                     {connectLinks.map((link, index) => (
//                       <li className="connect-item" key={index}>
//                         <img
//                           src={link.logo}
//                           alt="Logo"
//                           className="connect-logo"
//                         />
//                         <a href={link.link}>{link.name}</a>
//                       </li>
//                     ))}
//                   </div>
//                 </>
//               ) : (
//                 ""
//               )}
//             </div>
//             <p>
//               {/* <span className="meta-logo">
//                 <img src={Metamask} alt="" />
//               </span> */}
//               <span>{connectedAddress}</span>
//             </p>
//           </div>
//         ) : (
//           <>
//             <button
//               className="connect-button"
//               onClick={() => {
//                 connectToMetamask();
//               }}
//             >
//               Connect Wallet
//             </button>
//           </>
//         )}
//         <li className="settings-button">
//           <FiSettings size={24} color="#4a7a90" />
//         </li>
//         <div className="dropdown-setting"></div>
//       </div>
//     </nav>
//   );
// };


const Navbar1=()=> {
  const [coins,setcoin] =useState([])

  const [dropdownIndex, setDropdownIndex] = useState(null);
   
  const [isConnectOpen, setIsConnectOpen] = useState(false);

   const [connected, setConnected] = useState(false);

   const [connectedAddress, setConnectedAddress] = useState("");
   

  const handleMouseEnter = (index) => {
    setDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setDropdownIndex(null);
  };



  const connectLinks = [
    {
      name: "Link 1",
      logo: "logo1.png",
      link: "#link1",
    },
    {
      name: "Link 2",
      logo: "logo2.png",
      link: "#link2",
    },
    {
      name: "Link 3",
      logo: "logo3.png",
      link: "#link3",
    },
  ];


  const connectToMetamask = async () => {
    try {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const address = await signer.getAddress();
      const truncatedAddress = `${address.slice(0, 4)}...${address.slice(-4)}`;

      setConnectedAddress(truncatedAddress);
      setConnected(true);

      // Add any other desired functionality
    } catch (error) {
      console.error("Error connecting to Metamask:", error);
    }
  };
  // const {coins, setcoins}=useState({
  //   "data":[]
  // })

const obj=()=>{
  axios.get("https://api.twelvedata.com/cryptocurrencies?apikey=5fde1854ceb64d2ca022d173f8fcbf8d").then((res)=>{

    
  
(setcoin(res.data["data"]))
  
  

  }).catch(err=>console.log(err))
}

useEffect(()=>{
   
    obj()

   
},[setcoin])
  


  return (
    <Navbar  className="App" bg="light" expand={"lg"}>
      <Container fluid>
        <Navbar.Brand style={{"color":'white'}} href="#" > 
        <div className="logo">
        <img src={logo} alt=""  />   
         </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
               <NavDropdown  title={ <span className="text-light my-auto">Trade &nbsp;<RiArrowDropDownLine size={15}/></span>} color="white"  id="navbarScrollingDropdown">
            
            <NavDropdown.Item href="#action3"><MdMonitor/> &nbsp;Simple Mode</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action4">
             <AiOutlineLineChart/> &nbsp;Classic Mode
            </NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action5">
              <MdOutlineInsertChart/> &nbsp; P2P deal
            </NavDropdown.Item>
          </NavDropdown> 

           
       

          <NavDropdown  title={ <span className="text-light my-auto">DAO &nbsp;<RiArrowDropDownLine size={15}/></span>} color="white"  id="navbarScrollingDropdown">
            
            <NavDropdown.Item href="#action3"><AiTwotoneThunderbolt/>&nbsp;Snapshot</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action4">
            <SlGraph/>   Governance
            </NavDropdown.Item>
            <NavDropdown.Divider/>
            
            <NavDropdown.Item href="#action5">
            <AiFillWechat/> &nbsp;  forum
            </NavDropdown.Item>
          </NavDropdown>


          <NavDropdown  title={ <span className="text-light my-auto">Earn &nbsp;<RiArrowDropDownLine size={15}/></span>} color="white"  id="navbarScrollingDropdown">
            
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
            
          <NavDropdown  title={ <span className="text-light my-auto">More &nbsp;<RiArrowDropDownLine size={15}/></span>}   id="navbarScrollingDropdown">
            
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown  title={ <span className="text-light my-auto">Bridges &nbsp;<RiArrowDropDownLine size={15}/></span>}   id="navbarScrollingDropdown">
            
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
            <Nav.Link style={{color:"white"}} href="#" disabled>
             Buy Crpto
            </Nav.Link>
          </Nav>

       <div>
          <select class="form-select-padding-x-sm" style={{alignItems:"center"}}  aria-label="Default select example">

          {
          coins.slice(0,20).map(props=>{
            
                return <option>
                  
                  <image src={props.symbol}></image>
                  {props.currency_base}</option>
          })
        }
          </select>
          
       </div>
             
        
        
          
          
          <button
               className="connect-button"
               
               onClick={() => {
                 connectToMetamask();
               }}
             >
          Connect Wallet
             </button>
             &nbsp;
          &nbsp;
               
          <button className="btn btn-light">  <FiSettings size={15} color="#4a7a90" /></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navbar1;

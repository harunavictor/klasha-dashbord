import React from 'react'
import style from './Layout.module.css'
import logo from '../assets/klashimg.png'
import vict from '../assets/vict.jpeg'

 const Layout = () => {
     return (
        
        <div className="maincontainer">
      <section id="sidebar">
      <section class="title-container">
        <img src={logo} width="107px" alt="logo" className="logo" />
          
      </section>
      
       
      <section class="links-container">
        <div class="links">
          <div><span className="main-title">Main pages</span></div>
        </div>
                    
        <div class="links" id="item-link" style={{backgroundColor:"white"}}>
          <div class="icon">              
            <i class="fas fa-th-large"></i>
          </div>
          <span className="hover-item">Dashboard</span>
        </div>
                    
        <div class="links" id="item-link">
          <div class="icon">
            <i class="far fa-credit-card"></i>
          </div>
          <span className="main-title" >Balances</span>
        </div>
        <div class="links" id="item-link">
          <div class="icon">
            <i class="fas fa-users"></i>
          </div>
          <span className="hover-item">Customers</span>
        </div>
        <div class="links" id="item-link">
          <div class="icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <span  className="hover-item">Analytics</span>
        </div>
        
        <div class="links"id="item-link">
          <div ><span className="main-title">General</span></div>
        </div>    
         
         <div class="links"id="item-link">
          <div class="icon">
            <i class="fas fa-sliders-h"></i>
          </div>
          <span  className="hover-item">Settings</span>
        </div>  
         <div class="links">
          <div class="icon">
           <i class="fas fa-star"></i>
          </div>
          <span  className="hover-item">Team</span>
        </div>  
         <div class="links">
          <div class="icon">
            <i class="fas fa-phone-alt"></i>
          </div>
          <span  className="hover-item">Contact</span>
        </div>  
         <div class="links">
          <div class="icon">
            <i class="fas fa-sign-out-alt"></i>
          </div>
          <span  className="hover-item">Logout</span>
        </div>  
                 
      </section>
      
                
    </section>
    
    <section id="main-dashboard-content">
      <section id="top-section">
        <div class="input-box">
           <div className="balancesection">
                <h1 className="balance-one">Balances</h1>
              <p className="balance">Today,31st May 2021</p>
               </div> 
        
        </div>

        <div class="action-icons">
          <div class="action-icon-one">
              <i class="fas fa-bell"></i>
          </div>
          <div class="action-icon-two">
            <img src={vict} alt="gellery" width="30" style={{border:"transparent"} }/>
          </div>
        </div>
      </section>
                
           
             
         
        <section id="gridcontainer" className="">
               <div className="grid-one flex">
                 <div className="gridone">
                      <h6 className="total-margin ">Total account balance</h6>
                 
                      <div className="selectcurrency">
                                <span className="select-crrent styled">
                                <select name="currency" id="currency">
                                   <option value="usd">USD</option>
                                    <option value="kes">KES</option>
                                    <option value="ngn">NGN</option>
                                    <option value="ghc">GHC</option>
                                  </select>
                                 </span>
                     
                       </div>       
               
                 </div>
                 
                <div id="mainDiv"></div>
               <h1 className="dollers">$5,332.18</h1>
               </div>
                       
        
             <div className="grid-two">
               <h2 className="gridtwo-item">Funds on hold</h2>
               <div id="mainDiv"></div>
               <h1 className="dollers">$5,332.18</h1>
             </div>
           </section>
           
        <section className="payoutcontainer"id="payoutcontainer">
             <h4 className="paytab">Payout table</h4>
             <div className="form">
               <div> <input type="text" className="search-text" placeholder="search for something..." /></div>
             <div><i class="fas fa-search"></i></div>
             <div><input type="date" /></div>
               <div><button type="submit"><span className="payoutbutton">Payout</span></button></div>
             </div>
           </section>
           
           <div className="Container mt-5">


          <table class="table table-border table-hover   table-responsive table-responsive-sm table-responsive-md table-responsive-xl table-responsive-lg table-responsive-xs">
         <thead class="thead-light table-active"> 
  
          <tr>

            <th scope="col" className="theader">Payout Id</th>
            <th scope="col" className="theader">Source</th>
            <th scope="col" className="theader">Date</th>
          </tr> 
   </thead> 
  
  
  
  <tbody>
    <tr className="rowheader" >
      <th scope="row">1</th>
      <td >Victor</td>
      <td>31st May,2021</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Biden</td>
      <td>31st May,2021</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
       <td>31st May,2021</td>
    
                 </tr>
                   <tr>
      <th scope="row">4</th>
      <td>Larry</td>
      <td>31st May,2021</td>
      
    </tr>
    <tr className="table-active">
      <th scope="row">5</th>
      <td>Glory</td>
       <td>31st May,2021</td>
      
    </tr>
    <tr  class="font-weight-bold">
      <th scope="row">6</th>
      <td >Larry</td>
       <td>31st May,2021</td>
      
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
       <td colspan="2 text-center"><span  className="text-primary text-center ">See more...</span></td>
      
    </tr>
    
  </tbody>
  
</table>
            
  </div>
 </section>
               
</div>
             
        
             
    )
}

export default Layout